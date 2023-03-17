import React from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Grid, Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export const Spinner = () => {
	return <Grid container spacing={2}>
		<Grid item xs={2} />
		<Grid item xs={8}>
			<Item><AutorenewIcon /></Item>
		</Grid>
		<Grid item xs={2} />
	</Grid>;
};