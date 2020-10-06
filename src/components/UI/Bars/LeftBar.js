import React from "react"
import styles from "./LeftBar.module.scss"
import belka from "../../../assets/images/belka.png"

const LeftBar = props => {
   return (
      <>
         <img className={styles.leftBar} src={belka} alt="belka" />
         <h2 className={styles.heading}>{props.text}</h2>
      </>
   )
}

export default LeftBar
