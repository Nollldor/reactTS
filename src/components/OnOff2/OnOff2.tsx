import {useState} from "react";

type OnOff2PropsType = {
}

export const OnOff2 = (props: OnOff2PropsType) => {
    const [onValue, setOnValue] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: onValue ? "green" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: onValue ? "white" : "red",
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: onValue ? "green" : "red",
    }



    const onClickHandler = (on: boolean) => {
        on ? setOnValue(true) : setOnValue(false)
    }

    return(
        <div>
            <div style={onStyle} onClick={()=>onClickHandler(true)}>On</div>
            <div style={offStyle} onClick={()=>onClickHandler(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
        )
}