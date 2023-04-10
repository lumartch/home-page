import React, { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';
import { MainStyle } from './Main.css';
import { About, Header} from '../../components';

interface IMain {
	children?: ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item className={MainStyle} container spacing={2} xs={10}>
				{ children }
			</Grid>
			<Grid item xs={2}>
				<About />
			</Grid>
		</Grid>
	);
};

export default Main;