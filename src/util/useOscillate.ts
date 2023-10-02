import {useState} from "react";

export const useOscillate = (base_value: number, min: number, max: number, base_upward = true): [number, () => void, () => void] => {
    const [state, setState] = useState(base_value);
    let [upward, setUpward] = useState(base_upward);

    const next = () => {
        setState(s => {
            if(s === max) upward = false;
            else if(s === min) upward = true;
            const diff = upward ? 1 : -1;
            console.log(s, diff)

            return s + diff;
        });
        setUpward(upward)
    };

    const reset = () => {
        setState(base_value);
        setUpward(base_upward);
    };

    return [state, next, reset];
}