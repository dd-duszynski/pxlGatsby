import React from "react"
import { Link } from "gatsby"
import styles from "./RhombusBtn.module.scss"

const RhombusBtn = ({ children, type, link, addClass, text }) => {
   let renderResult
   switch (type) {
      case "input":
         renderResult = (
            <input
               type="submit"
               to={link}
               className={[styles.RhombusBtn, addClass].join(" ")}
               value={text}
            />
         )
         break
      case "button":
         renderResult = (
            <button
               type="submit"
               to={link}
               className={[styles.RhombusBtn, addClass].join(" ")}
            >
               {text}
            </button>
         )
         break
      case "link":
         renderResult = (
            <Link
               to={`/${link}`}
               className={[styles.RhombusLink, addClass].join(" ")}
            >
               {children}
            </Link>
         )
         break
      case "extLink":
         renderResult = (
            <a
               href={link}
               className={[styles.RhombusLink, addClass].join(" ")}
               target="_blank"
               rel="noopener noreferrer"
            >
               {children}
            </a>
         )
         break
      case "navLink":
         renderResult = (
            <Link
               to={`/${link}`}
               className={[styles.RhombusNavBtn, addClass].join(" ")}
               activeClassName={styles.active}
            >
               {children}
            </Link>
         )
         break
      default:
         renderResult = null
   }
   return renderResult
}

export default RhombusBtn
