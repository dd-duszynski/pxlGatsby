import React from 'react'
import styles from './BoxHeader.module.scss'
import H2 from '../Headers/H2'

const BoxHeader = ({ text }) => {
   return (
      <div className={styles.headerBox}>
         <H2 addClass={styles.header}>
            {text}
         </H2>
      </div>
   )
}

export default BoxHeader
