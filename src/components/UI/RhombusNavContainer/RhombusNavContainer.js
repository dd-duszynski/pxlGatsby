import React from 'react'
import styles from './RhombusNavContainer.module.scss'

const RhombusNavContainer = ({children}) => {
   return (
      <div className={styles.RhombusNavContainer}>
         {children}
      </div>
   )
}

export default RhombusNavContainer
