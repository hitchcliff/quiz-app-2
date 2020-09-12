import React from 'react'
import { Link } from 'react-router-dom'

interface IGoBackButtonProps {
    link?: string
}

const GoBackButton: React.FC<IGoBackButtonProps> = (props) => {
    const { link } = props;
    return (
        <button className="primary-button" >
            <Link to={link ? link : "/quiz-app-2/selection"}>Go back to selection</Link>
        </button>
    )
}

export default GoBackButton
