import React, { ReactElement } from 'react'
import styles from './Sidebar.module.scss'
import ProgressBar from '../ProgressBar/ProgressBar';
import ShareCard from '../ShareCard/ShareCard';

interface ISidebarProps {
    next?: Function,
    visible?: boolean | undefined,
    score?: number
}

const Sidebar: React.FC<ISidebarProps> = (props): ReactElement => {
    const { next, visible, score } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): null | void => {
        if(!next) return;
        next(); // call this callback function to handle next
    }

    return (
        <div className={styles.container}>
            <div className={styles.score}>
                <h4>Score</h4>
                <h2>{score}</h2>
            </div>
            <div className={styles.currentProgress}>
                <h4>15 out of 50</h4>
                <ProgressBar/>
            </div>
            <div className={styles.shareCard}>
                <ShareCard/>
            </div>
            <div className={styles.next}>
                <button className={visible ? "primary-button" : "hide"} onClick={e=>handleClick(e)}>
                    Next Question
                </button>
            </div>
        </div>
    )
}

export default Sidebar
