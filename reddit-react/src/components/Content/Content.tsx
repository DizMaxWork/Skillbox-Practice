import React from 'react'
import styles from './Content.module.css'

interface IContsentProps{
    children?: React.ReactNode
}

export default function Content({children}: IContsentProps) {
    return(
        <main className={styles.content}>
            {children}
        </main>
    )
};
