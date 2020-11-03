import React from "react"
import styles from "./LeftBar.module.scss"
import belka from "../../../assets/images/belka.png"
import H1 from '../Headers/H1'

const LeftBar = props => {
   return (
      <>
         <img className={styles.leftBar} src={belka} alt="belka" />
         <H1 addClass={styles.heading}>{props.text}</H1>
      </>
   )
}

export default LeftBar
