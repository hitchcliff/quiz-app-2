import React from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../../Store'
import GoBackButton from '../GoBackButton/GoBackButton'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Finished.module.scss'
const Finished = () => {
    const {score} = useSelector((state: RootStore) => state.currentScore)
    // console.log(currentScore)
    return (
        <div className={styles.container}>
            <div>
                <h4>{score >= 5 ? "Congrats!" : "Better luck next time!"}
                    <br/>You got <span>{score}</span></h4>
                <GoBackButton/>
            </div>
            <Sidebar score={score} />
        </div>
    )
}

export default Finished
