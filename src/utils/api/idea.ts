import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost:8888/.netlify/functions',
});

//* the below code can be used to add the authorizatin header to the request
//* but it will sent it in a cookie
// API.interceptors.request.use((req) => {
// })

export const fetchIdea = (id: number) => API.get(`/ideaGet?id=${id}`);

export const fetchIdeas = async (): Promise<any> => {
	return await API.get('/ideaGetAll');
};

export const fetchIdeasBySearch = (searchQuery: any) =>
	API.get(
		`/idea/search?searchQuery=${searchQuery.search || 'none'}&tags=${
			searchQuery.tags
		}`
	);

export const createIdeas = (newIdeas: object) => API.post('/ideas', newIdeas);

export const likeIdea = (id: number, userId: number) =>
	API.patch(`/ideaLike`, { id, userId });

export const updateIdea = (id: number, updatedProject: object) =>
	API.patch(`/ideaUpdate`, { id, updatedProject });

export const deleteidea = (id: number) => API.delete(`/ideaDelete?id=${id}`);
