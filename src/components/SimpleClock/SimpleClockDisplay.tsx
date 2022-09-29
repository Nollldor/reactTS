import React, {FC} from "react";

type PropsType = {
    seconds: number
    minutes: number
    hours: number
}

export const SimpleClockDisplay:FC<PropsType> = ({seconds, minutes, hours}) => {

    const formatTime = (num: number) => {
        return num<10
            ? '0' + num
            : num
    }
    return <>
        <span>{formatTime(hours)}:</span>
        <span>{formatTime(minutes)}:</span>
        <span>{formatTime(seconds)}</span>
    </>
}