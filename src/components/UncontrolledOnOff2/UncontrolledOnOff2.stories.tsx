import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff2} from "./UncontrolledOnOff2";


//for stories menu
export default {
    title: 'UncontrolledOnOff2',
    component: UncontrolledOnOff2
}

//variants of component
const callback = () => action("on or off clicked")

export const OnMode = () => <UncontrolledOnOff2 defaultMode={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff2 defaultMode={false} onChange={callback}/>
export const BugMode = () => <div>Unsync when change defaultMode when already rendered</div>




