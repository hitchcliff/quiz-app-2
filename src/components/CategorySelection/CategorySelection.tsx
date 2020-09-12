import React, { ReactElement, useState } from 'react'
import styles from './CategorySelection.module.scss';

interface IAppProps {
    categories: string[],
    callback: Function
}

export type IValueCategorySelectionProp = number;

const CategorySelection: React.FC<IAppProps> = (props): ReactElement => {
    const { categories, callback } = props; 
    const [state, setState] = useState({})
    const keys = Object.keys(state)[0];

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const target = e.currentTarget.innerText;
        callback(e);
        setState({
            [target]: true
        })
        
    }

    return (
        <ul className={styles.categoriesContainer}>
            {/* mapping all categories */}
            {categories.map((category, index) => (
                <li 
                    key={index}
                    onClick={e=>handleClick(e)} 
                    value={index + 9}
                    className={keys === category ? styles.active : styles.default}
                >{category}
                </li>
            ))}
        </ul>
    )
}

export default CategorySelection
