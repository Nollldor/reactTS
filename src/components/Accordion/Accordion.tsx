import React, {MouseEventHandler} from "react";

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    /**
     * value for AccordionTitle
     */
    titleValue: string,
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (v: any) => void
}


function Accordion1(props: AccordionPropsType) {
    console.log("Accordion rendering");
    return (
        <>
            {/*<AccordionTitle titleValue={props.titleValue} onClick={()=>props.onClick(!props.collapsed)}/>*/}
            <AccordionTitle titleValue={props.titleValue} onClick={props.onChange} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </>

    )

}

const Accordion = React.memo(Accordion1)


type AccordionTitlePropsType = {

    titleValue: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle1(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    const h3OnClickHandler = () => {
        props.onClick(!props.collapsed)
    }
    return (
        <h3 onClick={h3OnClickHandler}>---{props.titleValue}---</h3>
    );
}

const AccordionTitle = React.memo(AccordionTitle1)

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (v: any) => void
}


function AccordionBody1(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering");
    const onClick = (v: any) => {
        props.onClick(v)
    }
    return (
        <ul>
            {props.items.map((el, index) => {
                return <li onClick={() => onClick(el.value)} key={index}>{el.title}</li>
            })}
        </ul>
    );
}

const AccordionBody = React.memo(AccordionBody1)

export default Accordion;