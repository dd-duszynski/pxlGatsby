import React from "react"
import { Link } from "gatsby"
import styles from "./RhombusLink.module.scss"

const RhombusLink = ({
   children,
   link,
   addClass,
   externalLink,
   input,
   inputText,
}) => {
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
   const rhombusInput = (
      <input
         type="submit"
         to={link}
         className={[styles.RhombusInput, addClass].join(" ")}
         value={inputText}
      />
   )
   return externalLink ? extLink : input ? rhombusInput : intLink
}

export default RhombusLink
