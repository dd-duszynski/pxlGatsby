import React, { useState, useContext } from "react"

import styles from "./ProductCard.module.scss"
import Tag from "../../UI/Tag/Tag"
import RhombusLink from "../../UI/RhombusLink/RhombusLink"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"
import Context from "../../../context/context"

const ProductCard = ({ data }) => {
   const [imgIndex, setImgIndex] = useState(0)
   const { textContent } = useContext(Context)

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
   const uv = data.zadruk.findIndex(el => el === "UV")
   const solvent = data.zadruk.findIndex(el => el === "Solvent")
   const sublimation = data.zadruk.findIndex(el => el === "Sublimacja")
   const latex = data.zadruk.findIndex(el => el === "Latex")
   const indoor = data.opcjeProduktu.findIndex(el => el === "Indoor")
   const outdoor = data.opcjeProduktu.findIndex(el => el === "Outdoor")
   const news = data.opcjeProduktu.findIndex(el => el === "Nowość")
   const bestseller = data.opcjeProduktu.findIndex(el => el === "Bestseller")

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
            <div className={styles.tagsTopContainer}>
               {bestseller >= 0 && (
                  <Tag
                     type="best"
                     value={textContent.products.tag.bestseller[0]}
                     tooltip={textContent.products.tag.bestseller[1]}
                  />
               )}
               {news >= 0 && (
                  <Tag
                     type="news"
                     value={textContent.products.tag.news[0]}
                     tooltip={textContent.products.tag.news[1]}
                  />
               )}
            </div>
            <div className={styles.tagsContainer}>
               {indoor >= 0 && outdoor >= 0 ? (
                  <Tag
                     type="inOut"
                     value={textContent.products.tag.inOut[0]}
                     tooltip={textContent.products.tag.inOut[1]}
                  />
               ) : indoor >= 0 && outdoor < 0 ? (
                  <Tag
                     type="inOut"
                     value={textContent.products.tag.indoor[0]}
                     tooltip={textContent.products.tag.indoor[1]}
                  />
               ) : outdoor >= 0 && indoor < 0 ? (
                  <Tag
                     type="inOut"
                     value={textContent.products.tag.outdoor[0]}
                     tooltip={textContent.products.tag.outdoor[1]}
                  />
               ) : null}
               {sublimation >= 0 && (
                  <Tag
                     type="printing"
                     value={textContent.products.tag.sublimation[0]}
                     tooltip={textContent.products.tag.sublimation[1]}
                  />
               )}
               {latex >= 0 && (
                  <Tag
                     type="printing"
                     value={textContent.products.tag.latex[0]}
                     tooltip={textContent.products.tag.latex[1]}
                  />
               )}
               {uv >= 0 && (
                  <Tag
                     type="printing"
                     value={textContent.products.tag.uv[0]}
                     tooltip={textContent.products.tag.uv[1]}
                  />
               )}
               {solvent >= 0 && (
                  <Tag
                     type="printing"
                     value={textContent.products.tag.solvent[0]}
                     tooltip={textContent.products.tag.solvent[1]}
                  />
               )}
            </div>
         </div>
         <div className={styles.aboutContainer}>
            <H2>{data.nazwa}</H2>
            <Paragraph addClass={styles.paragraph} fontSize="15px">
               {data.opisKrotki}
            </Paragraph>
            <RhombusLink link={`/${data.url}`}>
               {textContent.products.productCard[0]}
            </RhombusLink>
         </div>
      </article>
   )
}
export default ProductCard
