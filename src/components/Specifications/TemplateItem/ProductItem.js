import React from "react"
import styles from "./ProductItem.module.scss"
import { RiArrowDownSLine } from "react-icons/ri"
import H3 from "../../UI/Headers/H3"

const TemplateItem = ({ product }) => {
   return product.specyfikacje ? (
      product.specyfikacje.map(item => {
         return (
            <li className={styles.TemplateItem}>
               <a href={item.file.url} target="_blank">
                  {item.file.fileName}
               </a>
            </li>
         )
      })
   ) : (
      <li className={styles.TemplateItem}>Brak</li>
   )
}

const ProductItem = ({ product, setProductHandler, choosen }) => {
   const arrowCSS = choosen ? styles.arrowRotate : styles.arrow
   return (
      <ul
         className={styles.ProductItem}
         onClick={() => setProductHandler(product.id)}
      >
         <H3 addClass={styles.titleContainer}>
            {product.nazwa}
            <RiArrowDownSLine className={arrowCSS} />
         </H3>
         {choosen && <TemplateItem product={product} />}
      </ul>
   )
}

export default ProductItem
