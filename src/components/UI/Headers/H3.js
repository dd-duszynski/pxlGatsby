import React from "react"
import styles from "./H3.module.scss"

const H3 = ({ children, addClass }) => {
   return (
      <h3 className={[styles.H3, addClass].join(" ")}>
         {children}
      </h3>
   )
}

export default H3
