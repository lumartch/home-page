import React from 'react';
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { BoxStyle, ContentStyle } from './PostCards.css';

interface IPostCards {
    title: string;
    date: string;
    content: string;
    link: string;
}

export const PostCards = ( { title, content, link, date } :IPostCards) => {
    return (
        <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex' }}>
                <Box className={ BoxStyle }>
                    <Grid container spacing={1}>
                        <Grid item xs={8}>
                            <Typography variant="h5">{title}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>Piblished on: {date}</Typography>
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
                <CardMedia
                    component="img"
                    sx={{ width: 200 }}
                    image="/lumartch-dev.JPG"
                />
            </Card>
        </CardActionArea>
    );
};