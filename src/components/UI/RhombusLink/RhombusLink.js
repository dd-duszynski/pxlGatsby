import React from "react"
import { Link } from "gatsby"
import styles from "./RhombusLink.module.scss"

const RhombusLink = ({ children, link, addClass, externalLink }) => {
   const extLink = (
      <a
         href={link}
         className={[styles.RhombusLink, addClass].join(" ")}
         target="_blank"
         rel="noopener noreferrer"
      >
         {children}
      </a>
   )
   const intLink = (
      <Link to={link} className={[styles.RhombusLink, addClass].join(" ")}>
         {children}
      </Link>
   )
   return externalLink ? extLink : intLink
}

export default RhombusLink
