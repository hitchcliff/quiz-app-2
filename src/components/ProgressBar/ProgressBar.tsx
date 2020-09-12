import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { getAmountEnteredInSession } from '../../util';
import styles from './ProgressBar.module.scss';

interface IAppProps {}

const ProgressBar: React.FC<IAppProps> = (): ReactElement => {
    const amount = getAmountEnteredInSession();
    const {currentIndex} = useSelector((state: RootStore) => state.currentIndexAtQuestion);
    
    const calculateWidthOfProgress = (totalNumberOfQuestions: number):number => {
        let result = (currentIndex + 1) / totalNumberOfQuestions * 100 // calculating total percentage
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