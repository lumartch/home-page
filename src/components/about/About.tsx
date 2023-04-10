import React from 'react';
import { Grid, Typography, Link } from '@mui/material';

import { GridStyle } from './About.css';
import { DevInfo } from '../../util';

export const About = () => {
    return (
        <Grid className={GridStyle} container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h5'>ABOUT</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>{DevInfo}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5'>REPOS</Typography>
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={6}>
                    <Typography>
                        <Link
                            target='_blank'
                            href='https://github.com/lumartch'
                            underline="hover"
                        >
                            GitHub
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        <Link
                            target='_blank'
                            href='https://gitlab.com/lumartch'
                            underline="hover"
                        >
                            GitLab
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5'>Music Project</Typography>
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={6}>
                    <Typography>
                        <Link
                            target='_blank'
                            href='https://www.youtube.com/@LumartChryssomallis'
                            underline="hover"
                        >
                            YouTube
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        <Link
                            target='_blank'
                            href='https://soundcloud.com/lumartch'
                            underline="hover"
                        >
                            SoundCloud
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};