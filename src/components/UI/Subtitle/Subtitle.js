import React from "react"
import styles from "./Subtitle.module.scss"

const Subtitle = ({ children, addClass }) => {
   return (
      <span className={[styles.Subtitle, addClass].join(" ")}>
         {children}
      </span>
   )
}

export default Subtitle
