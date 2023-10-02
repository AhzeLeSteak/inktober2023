import {CSSProperties} from "react";

export const placement = (url: string, width = 0, height = 0): CSSProperties => {
    if(!url.startsWith('/'))
        url = '/' + url;
    const res: any = {backgroundImage: `url(${process.env.PUBLIC_URL}${url})`};
    if(width)
        res['--width'] = width
    if(height)
        res['--height'] = height;
    return res as CSSProperties;
};