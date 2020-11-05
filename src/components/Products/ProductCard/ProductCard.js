import React, { useState } from "react"
import styles from "./ProductCard.module.scss"
import Tag from "../../UI/Tag/Tag"
import RhombusLink from "../../UI/RhombusLink/RhombusLink"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"

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
   const bestseller = data.opcjeProduktu.findIndex(el => el === "Bestseller")
   console.log(bestseller);
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
            {
               bestseller >= 0 ? (
                  <div className={styles.tagsTopContainer}>
                     <Tag type="bestseller">{data.opcjeProduktu[bestseller]}</Tag>
                  </div>
               ) : null
            }
            <div className={styles.tagsContainer}>
               <Tag type="group">{data.rodzaj}</Tag>
               <Tag type="indOut">{data.opcjeProduktu[0]}</Tag>
               <Tag type="print">{data.zadruk[0]}</Tag>
            </div>
         </div>
         <div className={styles.aboutContainer}>
            <H2>{data.nazwa}</H2>
            <Paragraph addClass={styles.description}>
               {data.opisKrotki}
            </Paragraph>
            <RhombusLink link={`/${data.url}`}>Zobacz produkt</RhombusLink>
         </div>
      </article>
   )
}
export default ProductCard
