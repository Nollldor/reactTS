import React from "react";
import style from "./OnOff.module.css"

type OnOffPropsType = {
    signal: boolean
}

const On = () => {
    return (
        <div className={style.onOff}>
            <div className={style.green}>On</div>
            <div>Off</div>
            <div className={style.circle + " " + style.green}></div>
        </div>
    )
}

const Off = () => {
    return (
        <div className={style.onOff}>
            <div>On</div>
            <div className={style.red}>Off</div>
            <div className={style.circle + " " + style.red}></div>
        </div>
    )
}

export const OnOff = (props: OnOffPropsType) => {

    return (
        <>
            {props.signal && <On/>}
            {!props.signal && <Off/>}

        </>
    )
}