import React from 'react';
import { Grid, Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Typography variant='h2'>
                PAGE NOT FOUND
            </Typography>
        </Grid>
    );
};

export default NotFound;