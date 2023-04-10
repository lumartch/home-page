import React from 'react';
import { Grid, Typography } from '@mui/material';
import { GridStyle } from './About.css';

export const About = () => {
    return (
        <Grid className={GridStyle} container>
            <Grid xs={12}>
                <Typography variant='h5'>ABOUT</Typography>
            </Grid>
            <Grid xs={12}>
                <Typography>Software Developer Engineer Jr with two years of experience in Front-End and Back-End looking for a mid-level position to launch my career into new challenges; Throughout my career, I've explored different areas of software development such as Front-End, Back-end, testing, and support for legacy services. To advance my profession as a Full-stack Engineer, I'm now working to improve my tool abilities for ReactJS, Jest, Java, SpringBoot, and Rest API design.</Typography>
            </Grid>
        </Grid>
    );
};