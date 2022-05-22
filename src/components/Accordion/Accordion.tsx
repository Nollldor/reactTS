import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");
    if(props.collapsed){
        return <AccordionTitle titleValue={props.titleValue}/>
    } else{
        return (
            <>
                <AccordionTitle titleValue={props.titleValue}/>
                <AccordionBody/>
            </>
        );
    }
}

type AccordionTitlePropsType = {
    titleValue: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return(
        <h3>---{props.titleValue}---</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering");

    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;