import React from "react"
import styles from "./HorizontalBar.module.scss"

const HorizontalBar = ({ children }) => {
   return (
      <div className={styles.HorizontalBar}>
         <div className={styles.bar} />
         {children}
      </div>
   )
}

export default HorizontalBar
