import React from "react"
import styles from "./H4.module.scss"

const H4 = ({ children, addClass }) => {
   return <h4 className={[styles.H4, addClass].join(" ")}>{children}</h4>
}

export default H4
