import React from "react"
import styles from "./ProductItem.module.scss"
import H3 from "../../UI/Headers/H3"
import TemplateItem from "./TemplateItem"

const ProductItem = ({ product, setProductHandler, choosen }) => {
   const image = product.zdjecia[0].fixed.src
   return (
      <ul
         className={styles.ProductItem}
         onClick={() => setProductHandler(product.id)}
      >
         <H3 addClass={styles.titleContainer}>
            {product.nazwa}
            <div className={styles.imageContainer}>
               <img src={image} alt="" className={styles.image} />
            </div>
         </H3>
         {choosen && <TemplateItem product={product} />}
      </ul>
   )
}

export default ProductItem
