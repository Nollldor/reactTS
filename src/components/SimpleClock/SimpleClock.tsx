import React, {useEffect, useState} from "react";

export const SimpleClock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(()=>{
            setDate(new Date())
        },1000)

        return ()=>{
            clearInterval(intervalID)
        }
    },[])



    return <>
        hello, {date.toLocaleTimeString()}
    </>
}