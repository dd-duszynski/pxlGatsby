import React from "react"
import styles from "./H1.module.scss"

const H1 = props => {
   return (
      <h1 className={styles.H1} style={{ color: props.color }}>
         {props.children}
      </h1>
   )
}

export default H1
