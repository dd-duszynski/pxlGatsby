import React, { useState } from "react"
import styles from "./ProductCard.module.scss"
import Tag from "../../UI/Tag/Tag"
import arrowLeft from "../../../assets/icons/arrowLeft.svg"
import arrowRight from "../../../assets/icons/arrowRight.svg"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import H3 from "../../UI/Headers/H3"

const ProductCard = ({ data }) => {
   const [imgIndex, setImgIndex] = useState(0)

   const imgPrev = () => {
      let currentIndex = imgIndex
      const maxIndex = data.zdjecia.length - 1

      if (currentIndex > 0) {
         setImgIndex(currentIndex - 1)
      } else if (currentIndex === 0) {
         setImgIndex(maxIndex)
      }
   }
   const imgNext = () => {
      let currentIndex = imgIndex
      let maxIndex = data.zdjecia.length - 1

      if (currentIndex < maxIndex) {
         setImgIndex(currentIndex + 1)
      } else if (currentIndex === maxIndex) {
         setImgIndex(0)
      }
   }

   return (
      <article className={styles.ProductCard}>
         <div className={styles.imageContainer}>
            <div className={styles.arrowLeft} onClick={imgPrev}>
               <RiArrowLeftSLine />
            </div>
            <img
               src={data.zdjecia[imgIndex].fluid.src}
               className={styles.image}
               alt={data.nazwa}
            />
            <div className={styles.arrowRight} onClick={imgNext}>
               <RiArrowRightSLine />
            </div>
            <div className={styles.tagsContainer}>
               <Tag type="group">Banery</Tag>
               <Tag type="indOut">Indoor</Tag>
               <Tag type="print">UV/Latex</Tag>
            </div>
         </div>
         <div className={styles.aboutContainer}>
            <H3>{data.nazwa}</H3>
            <p className={styles.description}>{data.opisKrotki}</p>
            <RhombusBtn link={`/${data.url}`}>Zobacz produkt</RhombusBtn>
         </div>
      </article>
   )
}
export default ProductCard
