import React, {useState} from 'react';
import Accordion from "./Accordion";
import {ComponentMeta, ComponentStory} from "@storybook/react";


//for stories menu
export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: { onClick: { action: 'accordion title clicked' } },
} as ComponentMeta<typeof Accordion>;

//variants of component


const template:ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>

export const CollapsedMode = template.bind({})
CollapsedMode.args = {
    titleValue: "title",
    collapsed: true,
}

export const UncollapsedMode = template.bind({})
UncollapsedMode.args = {
    titleValue: "title",
    collapsed: false,
}


/*export const CollapsedMode = () => <Accordion titleValue={"title"} collapsed={true} onClick={callback}/>
export const UncollapsedMode = () => <Accordion titleValue={"title"} collapsed={false} onClick={callback}/>*/


export const ChangingMode:ComponentStory<typeof Accordion> = (args) => {
    const [signal, setSignal] = useState<boolean>(false)
    return <Accordion {...args} collapsed={signal} onClick={setSignal}/>
}
ChangingMode.args = {
    titleValue: "title",
}

