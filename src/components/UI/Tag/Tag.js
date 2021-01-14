import React from "react"
import styles from "./Tag.module.scss"
import ReactTooltip from "react-tooltip"

const Tag = ({ type, text, tooltip, link }) => {
   let css
   switch (type) {
      case "best":
         css = styles.red
         break
      case "news":
         css = styles.red
         break
      case "inOut":
         css = styles.green
         break
      case "printing":
         css = styles.blue
         break
      case "blogPrinting":
         css = styles.blue
         break
      case "blogDTP":
         css = styles.orange
         break
      case "blogProduct":
         css = styles.green
         break
      case "blogTechnology":
         css = styles.gray
         break
      case "blogAll":
         css = styles.blueOutline
         break
      default:
         css = styles.blue
   }
   const linkCSS = link ? styles.link : null
   return (
      <div className={[styles.Tag, css, linkCSS].join(" ")}>
         <span className={styles.tagText} data-tip data-for={tooltip}>
            {text}
         </span>
         {link ? null : (
            <ReactTooltip
               id={tooltip}
               place="bottom"
               type="dark"
               effect="solid"
               offset={{ top: -2 }}
            >
               <span>{tooltip}</span>
            </ReactTooltip>
         )}
      </div>
   )
}

export default Tag
