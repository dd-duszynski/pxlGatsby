import React from "react"
import styles from "./H3.module.scss"

const H3 = ({ children, addClass, color }) => {
   return (
      <h3 className={[styles.H3, addClass].join(" ")} style={{ color: color }}>
         {children}
      </h3>
   )
}

export default H3
