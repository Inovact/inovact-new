import {
	COMMENT_PROJECT,
	CREATE_PROJECT,
	DELETE_PROJECT,
	FETCH_PROJECT_ALL,
	FETCH_PROJECT_BY_ID,
	FETCH_PROJECT_BY_SEARCH,
	LIKE_PROJECT,
	UPDATE_PROJECT,
} from '../constants/actionTypes';
import { actiontype, project } from '../constants/interfaceTypes';

//? this will be done when get the request
interface projectInitialState {
	projects: project[];
	project: project;
	isLoading: boolean;
}

export const projectReducer = (
	state: projectInitialState,
	action: actiontype | any
) => {
	console.log(action.payload);
	switch (action.type) {
		case 'START_LOADING':
			return { ...state, isLoading: true };
		case 'STOP_LOADING':
			return { ...state, isLoading: false };
		case FETCH_PROJECT_ALL:
			return { ...state, projects: action.payload, isLoading: false };
		case FETCH_PROJECT_BY_ID:
			return { ...state, project: action.payload };
		case FETCH_PROJECT_BY_SEARCH:
			return { ...state, project: action.payload };
		case LIKE_PROJECT:
			return {
				...state,
				projects: state.projects.map((project: any) =>
					project.id === action.payload!.project.id
						? action.payload.project
						: project
				),
			};
		case COMMENT_PROJECT:
			return {
				...state,
				projects: state.projects.map((project: any) =>
					project.id === action.payload!.id ? action.payload : project
				),
			};
		case CREATE_PROJECT:
			return { ...state, projects: [...state.projects, action.payload] };
		case UPDATE_PROJECT:
			return {
				...state,
				projects: state.projects.map((project: any) =>
					project.id === action.payload.id ? action.payload : project
				),
			};
		case DELETE_PROJECT:
			return {
				...state,
				projects: state.projects.filter(
					(project: any) => project.id !== action.payload
				),
			};
		default:
			return {
				...state,
			};
	}
};
