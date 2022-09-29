import React, {useEffect, useState} from "react";

export const SimpleClock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(()=>{
            setDate(new Date())
        },1000)
    },[])



    return <>
        hello, {date.toLocaleTimeString()}
    </>
}