import React from "react"
import styles from "./RightBar.module.scss"
import rightBar from "../../../assets/images/belkaPrawa.png"

const RightBar = () => {
   return <img className={styles.rightBar} src={rightBar} alt="rightBar" />
}

export default RightBar
