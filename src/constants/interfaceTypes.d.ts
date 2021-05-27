//? these are the types for signin and signup form data
export interface signinFormData {
	email: string;
	password: string;
}

export interface signupFormData {
	username: string;
	email: string;
	password: string;
}

//? types for the dispatch action in reducer
export interface actiontype {
	type: string;
	payload: ?object;
}

//? interface for the response of user who has created the project
export interface projectUser {
	user_name: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

//? intergace for the aggregate of like and comments in the response
export interface aggregate {
	count: number;
}

export interface aggregateOut {
	aggregate: aggregate;
}

//? interface for the response type of comments of a project
export interface projectComments {
	created_at: string;
	id: number;
	project_id: number;
	updated_at: string;
	text: string;
	user_id: number;
	user: projectUser;
}

//? interface for the project response from the API
export interface project {
	caption: string;
	created_at: string;
	description: string;
	id: number;
	updated_at: string;
	url: string;
	user_id: number;
	user?: projectUser;
	project_comments: ?projectComments[];
	project_comments_aggregate: ?aggregateOut;
	project_likes_aggregate: ?aggregateOut;
}

//
