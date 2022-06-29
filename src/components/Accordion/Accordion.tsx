import React from "react";

export type AccordionPropsType = {
    /**
     * value for AccordionTitle
     */
    titleValue: string,
    collapsed: boolean
    onClick: (collapsed:boolean)=>void
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");
    return (
        <>
            {/*<AccordionTitle titleValue={props.titleValue} onClick={()=>props.onClick(!props.collapsed)}/>*/}
            <AccordionTitle titleValue={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </>

    )

}


type AccordionTitlePropsType = {

    titleValue: string
    onClick:(collapsed:boolean)=>void
    collapsed:boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    const h3OnClickHandler = () => {
        props.onClick(!props.collapsed)
    }
    return (
        <h3 onClick={h3OnClickHandler}>---{props.titleValue}---</h3>
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

export default Accordion;