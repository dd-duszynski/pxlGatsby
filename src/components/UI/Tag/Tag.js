import React from "react"
import styles from "./Tag.module.scss"

const Tag = ({ type, children }) => {
   let css
   switch (type) {
      case "printing":
         css = styles.printing
         break
      case "products":
         css = styles.products
         break
      case "dtp":
         css = styles.dtp
         break
      case "technology":
         css = styles.technology
         break
      case "group":
         css = styles.groupTag
         break
      case "indOut":
         css = styles.indoorOutdoorTag
         break
      case "print":
         css = styles.printingTag
         break
      case "bestseller":
         css = styles.bestsellerTag
         break
      default:
         css = styles.groupTag
   }
   return <div className={[styles.Tag, css].join(" ")}>{children}</div>
}

export default Tag
