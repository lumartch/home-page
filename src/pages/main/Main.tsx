import React from 'react';
import { Grid } from '@mui/material';
import { MainStyle } from './Main.css';
import { Header, LatestPost, PostCards } from '../../components';

const latestPostExample = {
	title: 'What is Lorem Ipsum?',
	content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
	link: '/api/post/123'
};

const Main = () => {
	return (
		<Grid className={MainStyle} container spacing={2} rowSpacing={2}>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<LatestPost title={latestPostExample.title} content={latestPostExample.content} link={latestPostExample.link} />
			</Grid>
			<Grid item xs={6}>
				<PostCards title={latestPostExample.title} content={latestPostExample.content} link={latestPostExample.link} />
			</Grid>
			<Grid item xs={6}>
				<PostCards title={latestPostExample.title} content={latestPostExample.content} link={latestPostExample.link} />
			</Grid>
		</Grid>
	);
};

export default Main;