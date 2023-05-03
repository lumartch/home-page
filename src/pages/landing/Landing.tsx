import React from 'react'; 
import { Grid } from '@mui/material';

import Main from '../main/Main';
import { LatestPost, PostCards } from '../../components';


const Landing = () => {
	const latestPostExample = {
		title: 'What is Lorem Ipsum?',
		content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
		link: '/api/post/123'
	};

	return (
		<Main>
			<Grid item xs={12}>
				<LatestPost title={latestPostExample.title} content={latestPostExample.content} link={latestPostExample.link} />
			</Grid>
			<Grid item xs={6}>
				<PostCards date={new Date(Date.now()).toLocaleString()} title={latestPostExample.title} content={latestPostExample.content} link={latestPostExample.link} />
			</Grid>
			<Grid item xs={6}>
				<PostCards date={new Date(Date.now()).toLocaleString()} title={latestPostExample.title} content={latestPostExample.content} link={latestPostExample.link} />
			</Grid>
		</Main>
	);
};

export default Landing;