import {CSSProperties} from "react";
import {placement} from "../util/backgroundStyle";


interface SizeAndPos extends CSSProperties{
    imgUrl: string,
    width: number,
    height: number,
    left?: number,
    top?: number,
    right ?: number,
    bottom ?: number
}
export const Element = (_props: SizeAndPos) => {
    const props = {..._props};
    const style = placement(props.imgUrl, props.width, props.height);
    (style as any)['--left'] = props.left;
    (style as any)['--top'] = props.top;
    (style as any)['--right'] = props.right;
    (style as any)['--bottom'] = props.bottom;

    const classes: string[]  = ['element'];
    classes.push(props.right === undefined ? 'left' : 'right');
    classes.push(props.bottom === undefined ? 'top' : 'bottom');


    for(const key of ['width', 'height', 'left', 'top', 'bottom', 'right'])
        (props as any)[key] = undefined!;

    return <div className={classes.join(' ')} style={{...props, ...style}}></div>
};