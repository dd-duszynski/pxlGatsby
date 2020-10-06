import React from "react"
import styles from "./TemplateItem.module.scss"
import { AiOutlineFilePdf } from "react-icons/ai"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

function TemplateItem({ text, type, clickFnc, id, url, images, choosen }) {
   const choosenCss = choosen ? styles.choosen : null
   const groupItem = (
      <li
         className={[styles.GroupItem, choosenCss].join(" ")}
         onClick={() => clickFnc(id)}
      >
         <span className={styles.text}>{text}</span>
         <HiOutlineArrowNarrowRight />
      </li>
   )

   const productItem = (
      <li
         className={[styles.TemplateItem, choosenCss].join(" ")}
         onClick={() => clickFnc(id)}
      >
         <span className={styles.text}>{text}</span>
         <div className={styles.imgContainer}>
            <img src={images} alt={text} />
         </div>
      </li>
   )

   const templateItem = (
      <a href={url} className={styles.TemplateLink} target="_blank" rel="noopener noreferrer">
         <AiOutlineFilePdf />
         <span className={styles.linkText}>{text}</span>
      </a>
   )

   if (type === "group") {
      return groupItem
   } else if (type === "product") {
      return productItem
   } else if (type === "template") {
      return templateItem
   } else {
      return null
   }
}

export default TemplateItem
