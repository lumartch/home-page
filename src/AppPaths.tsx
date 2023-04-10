import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Landing = lazy(() => import('./pages/landing/Landing'));
const NotFound = lazy(() => import('./pages/notFound/NotFound'));

export const AppPaths = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
		errorElement: <NotFound />,
	},
]);
