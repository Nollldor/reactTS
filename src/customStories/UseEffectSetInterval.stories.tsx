import React, {useCallback, useEffect, useMemo, useState} from "react";

export default {
    title: 'SimpleClock demo'
}


export const SimpleClock = () => {
    const [date, setDate] = useState(new Date())

    console.log("SimpleClock")

    useEffect(() => {
        console.log("useEffect")
        setInterval(()=>{
            setDate(new Date())
        },1000)
    },[])



    return <>
        hello, {date.toLocaleTimeString()}
    </>
}