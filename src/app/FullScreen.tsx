'use client'
import {useFullScreen} from "@/app/useFullScreen";
import styles from './page.module.css'
import {Fullscreen} from "@/icons/Fullscreen";
import {FullscreenExit} from "@/icons/FullscreenExit";

export const FullScreentsx = () => {
    const {toggleFullScreen, isFullScreen} = useFullScreen();
    return (
        <>

            <button className={styles.button} onClick={toggleFullScreen}>
                {!isFullScreen ?
                    <Fullscreen height={50} width={50}/> :
                    <FullscreenExit height={50} width={50}/>}
            </button>
        </>
    );
}