import React from "react"
import styles from "./RightBar.module.scss"

const RightBar = () => {
   return (
      <>
         <div className={styles.barBelowWrapper}>
            <div className={styles.barBelow} />
         </div>
         <div className={styles.barHigherWrapper}>
            <div className={styles.barHigher} />
         </div>
      </>
   )
}

export default RightBar
