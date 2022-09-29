import React, {FC} from "react";
import styles from "./SimpleAnalogClockDisplay.module.css"

type PropsType = {
    seconds: number
    minutes: number
    hours: number
}

export const SimpleAnalogClockDisplay:FC<PropsType> = ({seconds, minutes, hours}) => {
    return <div className={styles.clock}>
        <div className={`${styles.hand} ${styles.second}`} style={{transform: `rotate(${seconds*6}deg)`}}></div>
        <div className={`${styles.hand} ${styles.minute}`} style={{transform: `rotate(${minutes*6}deg)`}}></div>
        <div className={`${styles.hand} ${styles.hour}`} style={{transform: `rotate(${hours*30}deg)`}}></div>
    </div>
}