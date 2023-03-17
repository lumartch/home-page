import axios from 'axios';
import axiosRetry from 'axios-retry';

export const useApiHook = () => {
	const baseUri = 'api/';
	const client = axios.create({
		baseURL: baseUri,
		timeout: 1500,
		signal: abortController(1500),
	});
	axiosRetry(client, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

	const getHello = async () => {
		return await client.get('hello');
	};
	return { getHello };
};

const abortController = (timeoutMs: number) => {
	const abortController = new AbortController();
	setTimeout(() => abortController.abort(), timeoutMs || 0);
	return abortController.signal;
};
