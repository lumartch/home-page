import { style } from '@vanilla-extract/css';

export const IFrameStyle = style({
    fontSize: '10px', 
    color: '#cccccc',
    lineBreak: 'anywhere',
    wordBreak: 'normal',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
    fontWeight: '100',
});

export const aLink = style({
    color: '#cccccc',
    textDecoration: 'none',
});