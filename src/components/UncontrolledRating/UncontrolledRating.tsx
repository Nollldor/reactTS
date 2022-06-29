import React, {useState} from "react";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

type UncontrolledRatingPropsType = {
    defaultValue?: RatingType
    onChange?:(value:RatingType)=>void
}


export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    const [ratingValue, setRatingValue] = useState<RatingType>(props.defaultValue ? props.defaultValue : 0)

    const changeRating = (value: RatingType) => {
        setRatingValue(value)
        props.onChange && props.onChange(value)
    }

    console.log("Rating rendering");
    return (
        <div>
            <Star keyValue={1} selected={ratingValue > 0} callback={changeRating}/>
            <Star keyValue={2} selected={ratingValue > 1} callback={changeRating}/>
            <Star keyValue={3} selected={ratingValue > 2} callback={changeRating}/>
            <Star keyValue={4} selected={ratingValue > 3} callback={changeRating}/>
            <Star keyValue={5} selected={ratingValue > 4} callback={changeRating}/>
        </div>
    );
}


type StarPropsType = {
    keyValue: RatingType
    selected: boolean
    callback: (value: RatingType) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering");

    const onclickHandler = () => {
        props.callback(props.keyValue)
    }

    return (
        <span onClick={onclickHandler}>
            {props.selected ? <b> * star * </b> : "* star *"}
        </span>
    )
}