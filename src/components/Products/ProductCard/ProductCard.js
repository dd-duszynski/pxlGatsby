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
   const uv = data.zadruk.findIndex(el => el === "UV")
   const solvent = data.zadruk.findIndex(el => el === "Solvent")
   const sublimacja = data.zadruk.findIndex(el => el === "Sublimacja")
   const latex = data.zadruk.findIndex(el => el === "Latex")
   const indoor = data.opcjeProduktu.findIndex(el => el === "Indoor")
   const outdoor = data.opcjeProduktu.findIndex(el => el === "Outdoor")
   const nowosc = data.opcjeProduktu.findIndex(el => el === "Nowość")
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
               {bestseller >= 0 ? (
                  <Tag
                     type="bestseller"
                     value={data.opcjeProduktu[bestseller]}
                  />
               ) : null}
               {nowosc >= 0 ? (
                  <Tag type="nowosc" value={data.opcjeProduktu[nowosc]} />
               ) : null}
            </div>
            <div className={styles.tagsContainer}>
               <Tag
                  type="indOut"
                  value={[
                     data.opcjeProduktu[indoor],
                     data.opcjeProduktu[outdoor],
                  ]}
               >
                  {data.opcjeProduktu[0]}
               </Tag>

               {uv >= 0 ? <Tag type="printing" value="UV" /> : null}
               {solvent >= 0 ? <Tag type="printing" value="SOL" /> : null}
               {sublimacja >= 0 ? <Tag type="printing" value="SUB" /> : null}
               {latex >= 0 ? <Tag type="printing" value="LAT" /> : null}
            </div>
         </div>
         <div className={styles.aboutContainer}>
            <H2>{data.nazwa}</H2>
            <Paragraph addClass={styles.paragraph} fontSize="15px">
               {data.opisKrotki}
            </Paragraph>
            <RhombusLink link={`/${data.url}`}>Zobacz produkt</RhombusLink>
         </div>
      </article>
   )
}
export default ProductCard
