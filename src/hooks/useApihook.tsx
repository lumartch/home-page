import axios from 'axios';

export const useApiHook = () => {
	const baseUri = 'api/';

	const client = axios.create({
		baseURL: baseUri,
		timeout: 1000
	});

	const getHello = async () => {
		return await client.get('hello');
	};
	return { getHello };
};