import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    //collapsed: boolean
}


export function UncontrolledAccordion (props: AccordionPropsType) {

    const [collapsed, setCollapsed]  = useState(true)

    const AccordionTitleOnClickHandler = (toggle:boolean) => {
        toggle ? setCollapsed(false) : setCollapsed(true)
    }

    console.log("Accordion rendering");
    return (
        <>
            <AccordionTitle titleValue={props.titleValue} toggle={collapsed} callback={AccordionTitleOnClickHandler}/>
            {collapsed && <AccordionBody/>}
        </>

    )

}


type AccordionTitlePropsType = {
    titleValue: string
    toggle: boolean
    callback: (toggle: boolean)=>void
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

