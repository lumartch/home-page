import React from 'react';
import { Box, Grid, Link, Paper, Typography } from '@mui/material';
import { BoxStyle, ContentStyle, PaperStyle } from './LatestPost.css';

interface ILatestPost {
    title: string;
    content: string;
    link: string;
}

export const LatestPost = ( { title, content, link } :ILatestPost) => {
    return (
        <Paper className={ PaperStyle } elevation={16} >
            <Box className={ BoxStyle }>
                <Grid container rowSpacing={2} spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h4">{title}</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className={ContentStyle}>{content}</Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info(link);
                        }}
                    >
                        Continue reading...
                    </Link>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};