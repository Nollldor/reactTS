import React, {useState} from 'react';
import {Rating} from "./Rating";
import {RatingType} from "../UncontrolledRating/UncontrolledRating";

//for stories menu
export default  {
    title: 'Rating',
    component: Rating
}

//variants of component

export const EmptyRating = () => <Rating value={0} onClick={()=>{}}/>
export const Rating1 = () => <Rating value={1} onClick={()=>{}}/>
export const Rating2 = () => <Rating value={2} onClick={()=>{}}/>
export const Rating3 = () => <Rating value={3} onClick={()=>{}}/>
export const Rating4 = () => <Rating value={4} onClick={()=>{}}/>
export const Rating5 = () => <Rating value={5} onClick={()=>{}}/>

export const RatingChanging = () => {

    const [value,setValue] = useState<RatingType>(3)
    return <Rating value={value} onClick={setValue}/>
}
