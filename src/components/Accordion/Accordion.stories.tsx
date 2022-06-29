import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";


//for stories menu
export default  {
    title: 'Accordion',
    component: Accordion
}

//variants of component

const callback =()=>action("accordion title clicked")

export const CollapsedMode = () => <Accordion titleValue={"title"} collapsed={true} onClick={callback}/>
export const UncollapsedMode = () => <Accordion titleValue={"title"} collapsed={false} onClick={callback}/>




export const ChangingMode = () => {

    const [signal,setSignal] = useState<boolean>(false)
    return <Accordion titleValue={"title"} collapsed={signal} onClick={setSignal}/>
}

