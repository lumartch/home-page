import React, { useCallback, useEffect, useState } from 'react';
import { useApiHook } from '../../hooks';

const Landing = () => {
	const [hello, setHello] = useState<string>('');
	const [isFetchDone, setIsFetchDone] = useState<boolean>(false);
	const { getHello } = useApiHook();

	const callApi = useCallback( async () => {
		try {
			const response = await getHello();
			setHello(response.data);
		} catch (e){
			setHello("HELLO");
		}
	}, [getHello]);

	useEffect(() => {
		if(!isFetchDone){
			setIsFetchDone(true);
			callApi();
		}
	}, [callApi, isFetchDone]);

	return (
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
	);
};

export default Landing;