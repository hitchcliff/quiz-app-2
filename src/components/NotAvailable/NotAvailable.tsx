import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotAvailable.module.scss'
const NotAvailable = () => {
    return (
        <div className={styles.container}>
            <h2>There seems to be no<br/>Question this time :(</h2>
            <div>
                <button className="primary-button" >
                    <Link to="/quiz-app-2/selection">Go back to selection</Link>
                </button>
            </div>
        </div>
    )
}

export default NotAvailable
