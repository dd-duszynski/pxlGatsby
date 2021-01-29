import React from "react"
import styles from "./LeftBar.module.scss"
import H1 from "../Headers/H1"

const LeftBar = props => {
   return (
      <div className={styles.LeftBar}>
         <div className={styles.shape}>
            <H1 addClass={styles.heading}>{props.text}</H1>
         </div>
      </div>
   )
}

export default LeftBar
