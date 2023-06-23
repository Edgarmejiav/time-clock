import {Inter} from 'next/font/google'
import styles from './page.module.css'
import {TimeClock} from "./TimeClock";


export default function Home() {
    return (
        <main className={styles.main}>
            <TimeClock/>
        </main>
    )
}
