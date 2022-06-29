import React, {useState} from 'react';
import {OnOff2} from "./OnOff2";
import {action} from "@storybook/addon-actions";


//for stories menu
export default  {
    title: 'OnOff2',
    component: OnOff2
}

//variants of component

const callback =()=>action("on or off clicked")

export const OnMode = () => <OnOff2 signal={true} onClick={callback}/>
export const OffMode = () => <OnOff2 signal={false} onClick={callback}/>


export const ChangingMode = () => {

    const [signal,setSignal] = useState<boolean>(false)
    return <OnOff2 signal={signal} onClick={setSignal}/>
}
