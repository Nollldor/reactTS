import React from 'react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";


//for stories menu
export default  {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

//variants of component


export const TitleChangingMode = () => <UncontrolledAccordion titleValue={"title"}/>
export const MenuChangingMode = () => <UncontrolledAccordion titleValue={"Menu"}/>




