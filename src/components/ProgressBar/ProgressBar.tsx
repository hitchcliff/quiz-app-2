import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import styles from './ProgressBar.module.scss';

interface IAppProps {}

const ProgressBar: React.FC<IAppProps> = (): ReactElement => {
    const {amount} = useSelector((state: RootStore) => state.selection)
    const {currentIndex} = useSelector((state: RootStore) => state.currentIndexAtQuestion);

    const calculateWidthOfProgress = (totalNumberOfQuestions: number):number => {
        let result = (currentIndex + 1) / amount * 100 // calculating total percentage
        return result
    }

    return (
        <div className={styles.progressBar}>
            <div className={styles.current} style={{width: `${calculateWidthOfProgress(amount)}%`}}></div>            
            <div className={styles.total}></div>            
        </div>
    )
}

export default ProgressBar