import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from '@mui/material';
import { ThemeProvider, CssBaseline } from '@mui/material';

import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router';
import { AppPaths } from './AppPaths';
import { Spinner } from './util';
import { DarkTheme } from './theme/DarkTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
	.render(
		<StrictMode>
			<ThemeProvider theme={DarkTheme}>
				<CssBaseline />
				<Container maxWidth="xl">
					<Suspense fallback={<Spinner />}>
						<RouterProvider router={AppPaths} />
					</Suspense>
				</Container>
			</ThemeProvider>
		</StrictMode>
	);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
