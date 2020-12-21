import React from "react"
import styles from "./Tag.module.scss"
import ReactTooltip from "react-tooltip"

const Tag = ({ type, value, tooltip }) => {
   let css
   let text
   switch (type) {
      case "products":
         css = styles.products
         break
      case "inOut":
         css = styles.indoorOutdoorTag
         text = value
         break
      case "printing":
         css = styles.printing
         text = value
         break
      case "group":
         css = styles.groupTag
         text = value
         break
      case "best":
         css = styles.bestsellerTag
         text = value
         break
      case "news":
         css = styles.news
         text = value
         break
      case "dtp":
         css = styles.dtp
         break
      case "technology":
         css = styles.technology
         break
      case "print":
         css = styles.printingTag
         break
      default:
         css = styles.groupTag
   }

   return (
      <div className={[styles.Tag, css].join(" ")}>
         <span 
            className={styles.tagText}
            data-tip data-for={tooltip} 
         >
            {text}
         </span>
         <ReactTooltip
            id={tooltip}
            place="top"
            type="dark"
            effect="solid"
            offset={{ top: -2 }}
         >
            <span>{tooltip}</span>
         </ReactTooltip>
      </div>
   )
}

export default Tag
