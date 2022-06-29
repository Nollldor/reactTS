import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "./UncontrolledRating";


//for stories menu
export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

//variants of component


export const ChangingMode = () => {
    return <UncontrolledRating/>

}




