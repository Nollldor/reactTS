import React from "react";
import {RatingType} from "../UncontrolledRating/UncontrolledRating";

type RatingPropsType = {
    value: RatingType
    onClick: (value: RatingType) => void
}

export function Rating(props: RatingPropsType) {
    /*console.log("Rating rendering");*/
    return (
        <div>
            <Star selected={props.value > 0} onClick={() => props.onClick(1)}/>
            <Star selected={props.value > 1} onClick={() => props.onClick(2)}/>
            <Star selected={props.value > 2} onClick={() => props.onClick(3)}/>
            <Star selected={props.value > 3} onClick={() => props.onClick(4)}/>
            <Star selected={props.value > 4} onClick={() => props.onClick(5)}/>
        </div>
    );
}


type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function Star(props: StarPropsType) {
    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <span onClick={onClickHandler}>{props.selected ? <b> * star * </b> : "* star *"}</span>
    )

}