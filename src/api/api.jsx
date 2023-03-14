import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 'API-KEY': 'f6b31419-e96b-4791-95ff-aca7ab13d30a' },
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 5) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
			return response.data;
		});
	},
};

export const getUsers2 = (currentPage = 1, pageSize = 5) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
		return response.data;
	});
};
