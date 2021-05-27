const { query } = require('./utils/hasura');

exports.handler = async () => {
	try {
		const response = await query({
			query: `query getProjects {
				project {
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
			`,
		});
		if (!response.errors) {
			return {
				statusCode: 200,
				body: JSON.stringify(response.data.project),
			};
		} else {
			console.log(response.errors);
			return {
				statusCode: 422,
				body: JSON.stringify({
					errors: response.errors.map((error) => error.message),
				}),
			};
		}
	} catch (e) {
		console.log(e);
		return {
			statusCode: 501,
			body: JSON.stringify('internal server error'),
		};
	}
};
