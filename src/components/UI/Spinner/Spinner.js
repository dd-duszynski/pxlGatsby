import React from "react"
import styles from "./Spinner.module.scss"

const Spinner = () => {
   return (
      <div className={styles.Spinner}>
         <div className={styles.loader}></div>
      </div>
   )
}

export default Spinner
