import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff2} from "./components/OnOff2/OnOff2";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {RatingType, UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff2} from "./components/UncontrolledOnOff2/UncontrolledOnOff2";
import {Select} from "./components/Select/Select";
import {SimpleAnalogClockDisplay} from "./components/SimpleAnalogClock/SimpleAnalogClockDisplay";
import {Clock} from "./components/Clock/Clock";


function App() {
    /*console.log("App rendering");*/
    const [ratingValue, setRatingValue] = useState<RatingType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [onOffSignal, setOnOffSignal] = useState<boolean>(true)
    const [selectValue, setSelectValue] = useState<any>("Arthur")
    const users = [{value: "Arthur", title: "Arthur"}, {value: "Kristine", title: "Kristine"}, {
        value: "Olesya",
        title: "Olesya"
    }]
    return (
        <div>
            {/*<PageTitle title={"This is App component"}/>
            <PageTitle title={"Users"}/>
            Article 1
            <Rating value={3}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            */}
            {/*<OnOff signal={true}/>
            <OnOff signal={false}/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>
            <OnOff2 signal={onOffSignal} onClick={setOnOffSignal}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion
                titleValue={"Users"}
                collapsed={accordionCollapsed}
                onChange={setAccordionCollapsed}
                items={users}
                onClick={(id)=>alert(id)}
            />
            <Select
                value={selectValue}
                onClick={setSelectValue}
                items={users}
            />

            <UncontrolledOnOff2 onChange={setOnOffSignal}/> {onOffSignal.toString()}*/}
            <Clock/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    return (
        <h1>{props.title}</h1>
    );
}


export default App;
