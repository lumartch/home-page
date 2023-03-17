import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Main = lazy(() => import('./pages/main/Main'));
const NotFound = lazy(() => import('./pages/notFound/NotFound'));

export const AppPaths = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <NotFound />,
	},
]);
