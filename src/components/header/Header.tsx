import React from 'react';
import { Grid, Typography } from '@mui/material';
import { TitleStyle } from './Header.css';

export const Header = () => {
    return (
        <Grid className={TitleStyle} container spacing={3}>
            <Grid item xs />
            <Grid item xs={6}>
                <Typography variant='h3'>Blog</Typography>
            </Grid>
            <Grid item xs />
        </Grid>
    );
};