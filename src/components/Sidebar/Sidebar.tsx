import React, { ReactElement } from 'react'
import styles from './Sidebar.module.scss'
import ProgressBar from '../ProgressBar/ProgressBar';
import ShareCard from '../ShareCard/ShareCard';
import { useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { getAmountEnteredInSession } from '../../util';

interface ISidebarProps {
    next?: Function,
    visible?: boolean | undefined,
    score?: number
}

const Sidebar: React.FC<ISidebarProps> = (props): ReactElement => {
    const { next, visible, score } = props;
    const {currentIndex} = useSelector((state: RootStore) => state.currentIndexAtQuestion)
    const amount = getAmountEnteredInSession();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): null | void => {
        if(!next) return;
        next(); // call this callback function to handle next
    }

    return (
        <div className={styles.container}>
            <div className={styles.score}>
                <h4>Score</h4>
                <h2>{score ? score : 0}</h2>
            </div>
            <div className={styles.currentProgress}>
                <h4>{`${currentIndex + 1} out of ${amount}`}</h4>
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
