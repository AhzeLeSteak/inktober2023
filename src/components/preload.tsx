import {placement} from "../util/backgroundStyle";

export const Preload = (props: {images: string[], prefix ?: string}) => {

    return <>
        {props.images.map(url => {
            if(!url.startsWith("/"))
                url = '/' + url;
            if(props.prefix)
                url = props.prefix + url;
            return <div style={placement(url)}></div>;
        })}
    </>
};