import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff2} from "./UncontrolledOnOff2";


//for stories menu
export default  {
    title: 'UncontrolledOnOff2',
    component: UncontrolledOnOff2
}

//variants of component


export const ChangingMode = () => {
    const [value, setValue] = useState(false)
    return <UncontrolledOnOff2 onChange={setValue}/>}




