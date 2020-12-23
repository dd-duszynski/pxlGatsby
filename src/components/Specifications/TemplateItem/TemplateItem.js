import React from "react"
import styles from "./TemplateItem.module.scss"
import { AiFillFilePdf } from "react-icons/ai"

const TemplateItem = ({ product }) => {
   return product.specyfikacje ? (
      product.specyfikacje.map(item => (
         <a
            href={item.file.url}
            className={styles.TemplateItem}
            target="_blank"
            rel="noopener noreferrer"
            key={item.file.fileName}
         >
            <li className={styles.link}>
               <AiFillFilePdf className={styles.icon} />
               {item.file.fileName}
            </li>
         </a>
      ))
   ) : (
      <li className={styles.TemplateItem}>No template</li>
   )
}

export default TemplateItem
