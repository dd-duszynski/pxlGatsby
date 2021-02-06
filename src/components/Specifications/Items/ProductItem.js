import React, { useState } from "react"
import styles from "./ProductItem.module.scss"
import H3 from "../../UI/Headers/H3"
import TemplateItem from "./TemplateItem"
import { RiArrowDownSLine } from "react-icons/ri"

const ProductItem = ({ item }) => {
   const [choosen, setChoosen] = useState(false)
   const image = item.zdjecia[0].fluid.src
   const handleChoosen = () => {
      setChoosen(!choosen)
   }
   const arrowCSS = choosen ? styles.arrowRotate : styles.arrow
   return (
      <ul className={styles.ProductItem} onClick={handleChoosen}>
         <div className={styles.header}>
            <div className={styles.innerContainer}>
               <div className={styles.imageContainer}>
                  <img src={image} alt={item.nazwa} className={styles.image} />
               </div>
               <H3 addClass={styles.title}>{item.nazwa}</H3>
            </div>
            <RiArrowDownSLine className={arrowCSS} />
         </div>
         {choosen ? <TemplateItem product={item} /> : null}
      </ul>
   )
}

export default ProductItem
