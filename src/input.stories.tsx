import React, {useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'input',
    //component: OnOff2,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} /*as ComponentMeta<typeof Button>;*/

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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


// More on args: https://storybook.js.org/docs/react/writing-stories/args
/*UncontrolledInput.args = {

};*/
