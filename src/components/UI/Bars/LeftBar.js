import React from "react"
import styles from "./LeftBar.module.scss"
import H1 from '../Headers/H1'

const LeftBar = props => {
   return (
      <div className={styles.leftBar}>
         <H1 addClass={styles.heading}>{props.text}</H1>
      </div>
   )
}

export default LeftBar
