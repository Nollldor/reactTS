import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {ChangingMode} from "../UncontrolledOnOff2/UncontrolledOnOff2.stories";


//for stories menu
export default  {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

//variants of component


export const TitleUChangingMode = () => <UncontrolledAccordion titleValue={"title"}/>
export const MenuChangingMode = () => <UncontrolledAccordion titleValue={"Menu"}/>




