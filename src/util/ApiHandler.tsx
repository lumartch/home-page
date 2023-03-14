import React, { FC, ReactNode } from 'react';

type IApiHandler = {
    isLoading: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any,
    children?: ReactNode
}

export const ApiHandler: FC<IApiHandler> = ({ isLoading, error, children }) => {
	if (isLoading) {
		return <div>Loading data...</div>;
	}
	if(error !== null){
		// eslint-disable-next-line react/no-unescaped-entities
		return <div>We couldn't load your information.</div>;
	}
	return <>{children}</>;
};