import React, {FC, useEffect, useState} from "react";
import {SimpleAnalogClockDisplay} from "../SimpleAnalogClock/SimpleAnalogClockDisplay";
import {SimpleClockDisplay} from "../SimpleClock/SimpleClockDisplay";

type PropsType = {

}

export const Clock:FC<PropsType> = () => {
    const [date, setDate] = useState(new Date())
    const [analog, setAnalog] = useState(false)

    useEffect(() => {
        const intervalID = setInterval(()=>{
            setDate(new Date())
        },1000)

        return ()=>{
            clearInterval(intervalID)
        }
    },[])



    return <>
        <button onClick={()=>{setAnalog(!analog)}}> Analog/Digital </button>
        {analog
            ? <SimpleAnalogClockDisplay seconds={date.getSeconds()} minutes={date.getMinutes()} hours={date.getHours()}/>
            : <SimpleClockDisplay seconds={date.getSeconds()} minutes={date.getMinutes()} hours={date.getHours()}/>
        }
    </>
}