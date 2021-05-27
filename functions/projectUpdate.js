const { query } = require('./utils/hasura');
const middy = require('middy');
const requireAuth = require('./middlewares/auth/requireAuth');
const { parse } = require('querystring');

const projectUpdate = async (event) => {
	if (event.httpMethod !== 'POST')
		return {
			statusCode: 405,
			body: 'You are not using a http POST method for this endpoint.',
			headers: {
				Allow: 'POST',
			},
		};

	try {
		event.body = JSON.parse(event.body);
	} catch (error) {
		event.body = parse(event.body);
	}

	const url =
		typeof event.body.url == 'string' && event.body.url.trim().length > 0
			? event.body.url.trim()
			: '';
	const caption =
		typeof event.body.caption == 'string' &&
		event.body.caption.trim().length > 0
			? event.body.caption.trim()
			: false;
	const description =
		typeof event.body.description == 'string' &&
		event.body.description.trim().length > 0
			? event.body.description.trim()
			: '';
	const title = 'updated title';
	// typeof event.body.title == 'string' && event.body.title.trim().length > 0
	// 	? event.body.title.trim()
	// 	: '';
	const user = typeof event.user == 'object' ? event.user : false;

	const projectId = 3;

	if (title) {
		const result = await query({
			query: `
      mutation updateProject($projectId: Int = ${projectId}) {
        update_project(where: {id: {_eq: $projectId}}, _set: {caption: "new caption", title: "${title}", description: "${description}", url: "${url}"}) {
          returning {
              caption
							created_at
							description
							id
							updated_at
							url
							user_id
							user {
								user_name
								first_name
								avatar
								last_name
							}
							project_comments {
								created_at
								id
								project_id
								updated_at
								text
								user_id
								user {
									avatar
									first_name
									last_name
									user_name
								}
							}
							project_comments_aggregate {
								aggregate {
									count
								}
							}
							project_likes_aggregate {
								aggregate {
									count
								}
							}
          }
        }
      }
     `,
			variables: { projectId: 3 },
		});

		if (!result.errors) {
			const postedValue = result.data.update_project.returning[0];

			return {
				statusCode: 201,
				body: JSON.stringify(postedValue),
			};
		} else {
			return {
				statusCode: 422,
				body: JSON.stringify({
					errors: result.errors.map((error) => error.message),
				}),
			};
		}
	} else {
		return {
			statusCode: 400,
			body: 'Invalid or missing parameters',
		};
	}
};

exports.handler = middy(projectUpdate).use(requireAuth());
