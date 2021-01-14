import React from "react"
import { Link } from "gatsby"
import styles from "./Logo.module.scss"
import logoImg from "../../../assets/icons/logo_white.svg"

const Logo = ({ link }) => {
   return (
      <Link to={link} className={styles.logo}>
         <img className={styles.logoImg} src={logoImg} alt="PrintXL Logo" />
      </Link>
   )
}

export default Logo
