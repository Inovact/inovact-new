import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost:8888/.netlify/functions',
});

//* the below code can be used to add the authorizatin header to the request
//* but it will sent it in a cookie
// API.interceptors.request.use((req) => {
// })

export const fetchProject = async (id: number): Promise<any> => {
	return API.get(`/projectGet?id=${id}`);
};

export const fetchProjects = async (): Promise<any> => {
	return await API.get('/projectGetAll');
};

export const fetchProjectsBySearch = (searchQuery: any) =>
	API.get(
		`/project/search?searchQuery=${searchQuery.search || 'none'}&tags=${
			searchQuery.tags
		}`
	);

export const createProject = (newProject: object) =>
	API.post('/projectPost', newProject);

export const likeProject = (id: number, userId: number) =>
	API.post(`/projectLike`, { id, userId });

export const updateProject = (id: number, updatedProject: object) =>
	API.patch(`/projectUpdate`, { id, updatedProject });

export const deleteProject = (id: number) =>
	API.delete(`/projectDelete?id=${id}`);
