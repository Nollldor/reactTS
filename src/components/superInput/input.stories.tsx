import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'superInput',
    //component: OnOff2,
}




export const ControlledInputWithFixedValue = () => <input value={"it"}/>;

export const UncontrolledInput = () => <input/>;

export const UncontrolledInputWithTrackingValue = () => {
    const [value, setValue] = useState("")
    return <input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
    />
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef} id="inputID"/>
            <button onClick={save}>save</button>
            <span>value - {value}</span>
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input value={parentValue} onChange={onChange}/>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChange}>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Kiev</option>
            <option value={"3"}>Moscow</option>
        </select>
    )
}
