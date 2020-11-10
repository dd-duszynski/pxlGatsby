import React from "react"
import styles from "./TemplateItem.module.scss"
import { AiFillFilePdf } from "react-icons/ai"

const TemplateItem = ({ product }) => {
   return product.specyfikacje ? (
      product.specyfikacje.map(item => {
         return (
            <a
               href={item.file.url}
               target="_blank"
               className={styles.TemplateItem}
            >
               <li className={styles.link}>
                  <AiFillFilePdf className={styles.icon} />
                  {item.file.fileName}
               </li>
            </a>
         )
      })
   ) : (
      <li className={styles.TemplateItem}>Brak</li>
   )
}

export default TemplateItem
