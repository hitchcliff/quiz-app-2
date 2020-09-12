import React, { ReactElement, useState } from 'react'
import styles from './DifficultySelection.module.scss'

interface IAppProps {
    items: string[],
    callback: Function
}

const DifficultySelection: React.FC<IAppProps> = (props): ReactElement => {
    const { items, callback } = props;
    const [state, setState] = useState({});
    const keys = Object.keys(state)[0];

    const handleClick = (e: React.FormEvent<HTMLLIElement>) => {
       const name = e.currentTarget.innerText;
       callback(name);
       setState({
           [name]: true
       })
    }   

    return (
        <div className={styles.difficulty}>
            <ul>
                {
                    items.map((item, i) => (
                        <li 
                            key={i} 
                            
                            onClick={e=> handleClick(e)} //passing event props to parent
                            className={keys === item ? styles.active : styles.notActive}
                        >{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DifficultySelection
