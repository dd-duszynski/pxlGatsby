import React from "react"
import { Link } from "gatsby"
import styles from "./RhombusBtn.module.scss"

const RhombusBtn = ({children, link}) => {
   return (
      <Link to={link} className={styles.RhombusBtn}>
         {children}
      </Link>
   )
}

export default RhombusBtn
