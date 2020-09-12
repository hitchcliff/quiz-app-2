import React, { useState } from 'react'
import styles from './Question.module.scss'

interface IQuestionAppProps {
    category: string,
    answers: string[],
    question: string,
    callback: Function
}

const Question: React.FC<IQuestionAppProps> = (props) => {
    const { category, answers, question, callback } = props;
    const [state, setState] = useState<string | null>(null)
    const [defaultIndex, setDefaultIndex] = useState<number | null>(0); // default selection index
    
    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const value = e.currentTarget.getAttribute('data-aria'); //get the data attribute
        setState(value)
        setDefaultIndex(null); // once user clicked, turn off default selection
        callback(value) // call the callback
        //to pass value to parent
    }

    return (
        <div className={styles.container}>
            <span className={styles.category}>{category}</span>
            <h1 dangerouslySetInnerHTML={{__html: question}} /> 
            <ul className={styles.choices}>
                {answers.map((item, index) => (
                    <li className={item === state || index === defaultIndex ? styles.active : styles.default} key={index} onClick={e=>handleClick(e)} data-aria={item}>
                        <span>{index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : 'D'}</span>
                        <p dangerouslySetInnerHTML={{__html: item}} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Question
