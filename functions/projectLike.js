const { query } = require('./utils/hasura');
const middy = require('middy');
const requireAuth = require('./middlewares/auth/requireAuth');
const { parse } = require('querystring');

const projectLike = async (event) => {
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

	console.log(event.body);
	const { id, userId } = event.body;

	if (id) {
		const result = await query({
			query: `
      mutation MyMutation {
        insert_project_like_one(object: {project_id: ${id}, user_id: ${userId}}) {
          project_id
          user_id
        }
      }
      
     `,
		});

		console.log(result);

		if (!result.errors) {
			const postedValue = result.data.insert_project_like_one;

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

// exports.handler = middy(projectLike).use(requireAuth());

exports.handler = projectLike;
