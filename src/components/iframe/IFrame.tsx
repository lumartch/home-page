import React from 'react';
import { IFrameStyle, aLink } from './IFrame.css';

export const IFrame = () => {
    return (<>
        <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1438723912&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className={IFrameStyle}>
            <a className={aLink} href="https://soundcloud.com/lumartch" title="Lumart Chryssomallis" rel="noreferrer" target="_blank" >Lumart Chryssomallis</a> · <a className={aLink} href="https://soundcloud.com/lumartch/best-of-you-foo-fighters-realistic-string-quartet" title="Best of you - Foo Fighters (Realistic String Quartet)" rel="noreferrer" target="_blank">Best of you - Foo Fighters (Realistic String Quartet)</a>
        </div>
        </>
    );
};