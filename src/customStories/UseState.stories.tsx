import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generatorData() {
    console.log("Generator Data")
    //difficult counting
    return 34324242341
}

export const Example1 = () => {
    console.log("Example1")

    //const initState = useMemo(generatorData, [])

    const [counter, setCounter] = useState(generatorData)

    const changer = (state: number)=>{
        return state + 1
    }
    return <>
        <button onClick={()=> setCounter(changer)}>+ </button>
        {counter}
    </>
}