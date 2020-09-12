import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import styles from './ShareCard.module.scss';
const ShareCard = () => {
    return (
        <ul className={styles.shareCardContainer}>
            <li><FontAwesomeIcon icon={faTwitter} />Share on Twitter</li>
            <li><FontAwesomeIcon icon={faFacebookF}/>Share on Facebook</li>
            <li><FontAwesomeIcon icon={faLink}/>Copy link</li>
        </ul>
    )
}

export default ShareCard
