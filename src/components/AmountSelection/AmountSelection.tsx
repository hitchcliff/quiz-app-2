import React, { ReactElement } from 'react'
import styles from './AmountSelection.module.scss'

interface IAppProps {
    callback: Function
}

export type IValueAmountSelectionProp = number;

const AmountSelection: React.FC<IAppProps> = (props): ReactElement => {
    const { callback } = props;
    return (
        <div className={styles.container}>
            <input onChange={e=>callback(e)} type="text" placeholder="Amount"/>
        </div>
    )
}

export default AmountSelection
