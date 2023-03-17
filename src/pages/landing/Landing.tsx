import React, { useCallback, useEffect, useState } from 'react';
import { useApiHook } from '../../hooks';
import { ApiHandler } from '../../util';

const Landing = () => {
	const [hello, setHello] = useState<string>('');
	const [isFetchDone, setIsFetchDone] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [error, setError] = useState<any>(null);
	const { getHello } = useApiHook();

	const callApi = useCallback( async () => {
		try {
			const response = await getHello();
			setHello(response.data);
		} catch (e){
			setHello('');
			setError(e);
		} finally {
			setIsLoading(false);
		}
	}, [getHello]);

	useEffect(() => {
		if(!isFetchDone){
			setIsFetchDone(true);
			callApi();
		}
	}, [callApi, isFetchDone]);

	return (
		<ApiHandler isLoading={isLoading} error={error}>
			<div>
				<h3>
					Testing API Data
				</h3>
				<text>
					Hello this is the endpoint data: 
				</text>
				<br/>
				<br/>
				<span>
					{hello}
				</span>
				<br/>
				<br/>
				<text>
					TESTING ENDPOINT: /api/hello
				</text>
			</div>
		</ApiHandler>
	);
};

export default Landing;