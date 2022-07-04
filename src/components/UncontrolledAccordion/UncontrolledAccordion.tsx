import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type AccordionPropsType = {
    titleValue: string,
    //collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    /*const [collapsed, setCollapsed]  = useState(true)*/
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    /*const AccordionTitleOnClickHandler = (toggle:boolean) => {
        toggle ? setCollapsed(false) : setCollapsed(true)
    }*/

    const AccordionTitleOnClickHandler = (toggle: boolean) => {
        dispatch({type: TOGGLE_COLLAPSED})
    }

    console.log("Accordion rendering");
    return (
        <>
            <AccordionTitle titleValue={props.titleValue} toggle={state.collapsed} callback={AccordionTitleOnClickHandler}/>
            {state.collapsed && <AccordionBody/>}
        </>

    )

}


type AccordionTitlePropsType = {
    titleValue: string
    toggle: boolean
    callback: (toggle: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    const onClickHandler = () => {
        props.callback(props.toggle)
    }
    return (
        <h3 onClick={onClickHandler}>---{props.titleValue}---</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering");

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

