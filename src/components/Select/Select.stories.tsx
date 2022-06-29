import React, {useState} from 'react';


import {Select} from "./Select";


type ItemType = {
    title: string
    value: any
}

//for stories menu
export default {
    title: 'Select',
    component: Select,
}

//variants of component


export const UncollapsedMode = () => {
    const itemsArray: ItemType[] = [
        {value: "Arthur", title: "Arthur"},
        {value: "Kristine", title: "Kristine"},
        {value: "Olesya", title: "Olesya"}
    ]
    const [parentValue, setParentValue] = useState<any>("Arthur")
    return <Select value={parentValue} items={itemsArray} onClick={setParentValue}/>
}

