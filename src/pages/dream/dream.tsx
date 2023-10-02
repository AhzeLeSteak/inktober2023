import './dream.css'
import {useEffect, useState} from "react";
import {useOscillate} from "../../util/useOscillate";
import {Preload} from "../../components/preload";
import {Element} from "../../components/element";
import {placement} from "../../util/backgroundStyle";

export const Dream = () => {

    const [frame, nextFrame, reset] = useOscillate(1, 1, 8);
    const [frameAwaken, nextFrameAwaken, resetAwaken] = useOscillate(9, 9, 12);
    const [awaken, setAwaken] = useState(false);



    useEffect(() => {
        const id = setInterval(nextFrame, 300);
        const id2 = setInterval(nextFrameAwaken, 600);
        return () => {
            clearInterval(id);
            clearInterval(id2);
        };
    }, []);

    const wakeUp = () => {
        setAwaken(true);
        resetAwaken();
        setTimeout(() => {
            reset();
            setAwaken(false);
        }, 600*6);
    };

    return <div className="day pointer" id="day1" style={placement(`dream/${(awaken ? frameAwaken : frame)}.png`)} onClick={wakeUp}>
        {!awaken && <>
            <Element imgUrl="dream/cloud.png" width={112} height={96} right={0} top={0} zIndex={10}/>
            <Element imgUrl="dream/dream.gif" width={94} height={83} top={-6} right={-16} zIndex={0} backgroundSize="contain"></Element>
        </>}

        <Preload prefix="/dream" images={[
            '1.png',
            '2.png',
            '3.png',
            '4.png',
            '5.png',
            '6.png',
            '7.png',
            '8.png',
            '9.png',
            '10.png',
            '11.png',
            '12.png',
        ]}/>
    </div>
}