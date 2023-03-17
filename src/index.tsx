import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from '@mui/material';

import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router';
import { AppPaths } from './AppPaths';
import { Spinner } from './util';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
	.render(
		<StrictMode>
			<Container maxWidth="xl">
				<Suspense fallback={<Spinner />}>
					<RouterProvider router={AppPaths} />
				</Suspense>
			</Container>
		</StrictMode>
	);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
