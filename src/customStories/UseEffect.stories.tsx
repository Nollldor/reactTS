import React, {useCallback, useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])


    return <>
        hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>

    </>
}

export const ResetEffectExample = () => {

    const [count, setCount] = useState(1)

    console.log("Component rendered")

    useEffect(() => {
        console.log("Effect occurred")

        return () => {
            console.log("Reset effect")
        }
    }, [count])


    return <>
        counter: {count}
        <button onClick={() => {
            setCount(count + 1)
        }}>next count
        </button>

    </>
}

export const onKeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log("Component rendered with" + " " +  text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.document.addEventListener('keypress', handler)

        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])


    return <>
        Typed text: {text}

    </>
}

export const SetIntervalExample = () => {

    const [text, setText] = useState('')



    useEffect(() => {
        console.log("Timeout expired")

        const intervalID = setInterval(()=> {
            setText("3 seconds passed")
        },3000)



        return () => {
            clearInterval(intervalID)
        }
    }, [text])


    return <>
        Typed text: {text}

    </>
}