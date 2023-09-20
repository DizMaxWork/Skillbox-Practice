import React from 'react'
import styles from './CardControls.module.css'
import CardKarmaValue from './CardKarmaValue/CardKarmaValue'
import CardComments from './CardComments/CardComments'
import CardActions from './CardActions/CardActions'

export default function CardControls() {
    return(
        <div className={styles.controls}>
            <CardKarmaValue />
            <CardComments />
            <CardActions />
        </div>
    )
};
