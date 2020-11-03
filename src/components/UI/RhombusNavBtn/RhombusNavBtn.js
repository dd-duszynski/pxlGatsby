import React from "react"
import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./RhombusNavBtn.module.scss"

const RhombusNavBtn = ({ children, link, addClass }) => {
   return (
      <Link
         fade
         to={link}
         className={[styles.RhombusNavBtn, addClass].join(" ")}
         activeClassName={styles.active}
      >
         {children}
      </Link>
   )
}

export default RhombusNavBtn
