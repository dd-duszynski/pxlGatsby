import React from "react"
import styles from "./HorizontalBar.module.scss"

const HorizontalBar = ({ children, addClass }) => {
   return (
      <div className={[styles.HorizontalBar, addClass].join(' ')}>
         <div className={styles.bar} />
         {children}
      </div>
   )
}

export default HorizontalBar
