import React, { useState, useContext } from "react"
import styles from "./ProductCard.module.scss"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"
import Context from "../../../context/context"
import TagsContainer from "../TagsContainer/TagsContainer"

const ProductCard = ({ data }) => {
   const [imgIndex, setImgIndex] = useState(0)
   const { textContent } = useContext(Context)
   const isMoreThanOneImg = data.zdjecia.length > 1

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
            {isMoreThanOneImg ? (
               <div className={styles.arrowLeft} onClick={imgPrev}>
                  <RiArrowLeftSLine />
               </div>
            ) : null}
            <img
               src={data.zdjecia[imgIndex].fixed.src}
               className={styles.image}
               alt={data.nazwa}
            />
            {isMoreThanOneImg ? (
               <div className={styles.arrowRight} onClick={imgNext}>
                  <RiArrowRightSLine />
               </div>
            ) : null}
            <TagsContainer data={data} text={textContent.products} top />
            <TagsContainer data={data} text={textContent.products} bottom />
         </div>
         <div className={styles.paragraphContainer}>
            <H2>{data.nazwa}</H2>
            <Paragraph addClass={styles.paragraph}>{data.opisKrotki}</Paragraph>
            <RhombusBtn link={data.url} type="link">
               {textContent.products.productCard[0]}
            </RhombusBtn>
         </div>
      </article>
   )
}
export default ProductCard
