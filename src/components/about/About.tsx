import React from 'react';
import { Grid, Typography, Link } from '@mui/material';

import { GridStyle, IFrameStyle, aLink } from './About.css';
import { DevInfo } from '../../util';

export const About = () => {
    return (
        <Grid className={GridStyle} container spacing={2} item xs={12} md={2}>
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
                <Grid item xs={12}>
                    <>
                        <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1438723912&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        <div className={IFrameStyle}>
                            <a className={aLink} href="https://soundcloud.com/lumartch" title="Lumart Chryssomallis" rel="noreferrer" target="_blank" >Lumart Chryssomallis</a> · <a className={aLink} href="https://soundcloud.com/lumartch/best-of-you-foo-fighters-realistic-string-quartet" title="Best of you - Foo Fighters (Realistic String Quartet)" rel="noreferrer" target="_blank">Best of you - Foo Fighters (Realistic String Quartet)</a>
                        </div>
                    </>
                </Grid>
            </Grid>
        </Grid>
    );
};