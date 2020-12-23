import React from "react"
import styles from "./H1.module.scss"

const H1 = ({ children, addClass, color }) => {
   return (
      <h1 className={[styles.H1, addClass].join(" ")} style={{ color: color }}>
         {children}
      </h1>
   )
}

export default H1
