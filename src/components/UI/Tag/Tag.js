import React from "react"
import styles from "./Tag.module.scss"

const Tag = ({ type, children, value }) => {
   console.log(type, value)
   let css
   let text
   switch (type) {
      case "products":
         css = styles.products
         break
      case "indOut":
         css = styles.indoorOutdoorTag
         if (value.indexOf(undefined) < 0) {
            text = "IN / OUT"
         } else if (value.indexOf("Indoor") >= 0) {
            text = "Indoor"
         } else {
            text = "Outdoor"
         }
         break
      case "printing":
         css = styles.printing
         text = value
         break
      case "group":
         css = styles.groupTag
         text = value
         break
      case "bestseller":
         css = styles.bestsellerTag
         text = value
         break
      case "nowosc":
         css = styles.bestsellerTag
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


   // if (type === "indOut") {
   //    css = styles.indoorOutdoorTag
   //    if (value.indexOf(undefined) >= 0) {
   //       text = "IN / OUT"
   //    } else if (value[0] === "Indoor") {
   //       text = "Indoor"
   //    } else {
   //       text = "Outdoor"
   //    }
   // }

   // if ((type = "group")) {
   //    css = styles.groupTag
   //    text = value
   // }

   return <div className={[styles.Tag, css].join(" ")}>{text}</div>
}

export default Tag
