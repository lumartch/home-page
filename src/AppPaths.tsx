import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import App from './pages/demo/App';

export const AppPaths = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
		errorElement: <div>PAGE NOT FOUND</div>,
	},
	{
		path: '/demo',
		element: <App />
	}
]);
