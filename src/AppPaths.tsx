import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = lazy(() => import('./pages/demo/App'));
const Main = lazy(() => import('./pages/main/Main'));

export const AppPaths = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <div>PAGE NOT FOUND</div>,
	},
	{
		path: '/demo',
		element: <App />
	}
]);
