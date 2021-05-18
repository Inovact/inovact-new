const middy = require('middy');
const requireAuth = require('./middlewares/auth/requireAuth');
const { query } = require('./utils/hasura');
const client = require('./utils/redis');

//! writing the return inside an async function errors out as the base function
//! does not have a return, so changed it to return a promise so that the base handler
//! return a promise.
const getProject = async (event, context, callback) => {
	// context.callbackWaitsForEmptyEventLoop = false;

	//* This can later be changed to event.body made this for testing purpose
	const { id } = event.queryStringParameters;
	console.log(id);

	client.on('error', (error) => {
		console.log(error);
	});

	const promise = new Promise((resolve, reject) => {
		//? This is the redis client which first checks for cache in the redis database
		//? if found returns it else checks in the postgres database.
		client.get(`project:${id}`, async (err, resultProject) => {
			if (err) {
				reject(Error(err));
			}
			if (resultProject) {
				resolve({ statusCode: 200, body: JSON.stringify(resultProject) });
			} else {
				const data = await query({
					query: `query getProjectById{
						project( where: {id: {_eq: ${id}}}) {
							caption
							created_at
							description
							id
							updated_at
							url
							user_id
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
						}
					}					
            `,
					// variables: { id },
				});

				//? This is where it sets the key value pair for a particular project
				//? so that next time the same project is fetched it can return from
				//? the cache.
				// client.setex(`project:${id}`, 3600, JSON.stringify(project));
				console.log(data);
				resolve({ statusCode: 200, body: JSON.stringify(data) });
			}
		});
	});
	return promise;
};

exports.handler = middy(getProject).use(requireAuth);
