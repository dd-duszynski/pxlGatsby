import React from "react"
import styles from "./VerticalBar.module.scss"

const VerticalBar = ({ children, addClass }) => {
   return (
      <div className={[styles.VerticalBar, addClass].join(' ')}>
         <div className={styles.bar} />
         {children}
      </div>
   )
}

export default VerticalBar
