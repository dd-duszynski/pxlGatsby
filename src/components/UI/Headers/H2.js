import React from "react"
import styles from "./H2.module.scss"

const H2 = ({ children, addClass, onClick, color }) => {
   return (
      <h2
         className={[styles.H2, addClass].join(" ")}
         onClick={onClick}
         style={{ color: color }}
      >
         {children}
      </h2>
   )
}

export default H2
