'use client'

import styles from './page.module.css'
import React, {useEffect, useState} from 'react'

export const TimeClock = () => {
    const [timeCurrent, setTimeCurrent] = useState("")
    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            const hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();

            const formattedHours = hours < 10 ? `0${hours}` : hours;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

            setTimeCurrent(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className={styles.timeClock}>
            <h1>{timeCurrent}</h1>
        </div>
    )
}