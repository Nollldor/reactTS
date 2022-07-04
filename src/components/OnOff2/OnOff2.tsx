import React, {useState} from "react";

type OnOff2PropsType = {
    signal: boolean
    onClick: (signal:boolean)=>void
}

export const OnOff2 = React.memo((props: OnOff2PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.signal ? "green" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.signal ? "white" : "red",
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.signal ? "green" : "red",
    }



    const onClickHandler = (on: boolean) => {
        on ? props.onClick(true) : props.onClick(false)
    }

    return(
        <div>
            <div style={onStyle} onClick={()=>onClickHandler(true)}>On</div>
            <div style={offStyle} onClick={()=>onClickHandler(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
        )
})