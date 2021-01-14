import React, { useState, useContext } from "react"
import styles from "./ProductCard.module.scss"
import Tag from "../../UI/Tag/Tag"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"
import Context from "../../../context/context"

const TagsContainer = ({ data, text, top, bottom }) => {
   let news, bestseller, indoor, outdoor
   if (data.opcjeProduktu) {
      news = data.opcjeProduktu.findIndex(el => el === "Nowość")
      bestseller = data.opcjeProduktu.findIndex(el => el === "Bestseller")
      indoor = data.opcjeProduktu.findIndex(el => el === "Indoor")
      outdoor = data.opcjeProduktu.findIndex(el => el === "Outdoor")
   }

   let uv, solvent, sublimation, latex
   if (data.zadruk) {
      uv = data.zadruk.findIndex(el => el === "UV")
      solvent = data.zadruk.findIndex(el => el === "Solvent")
      sublimation = data.zadruk.findIndex(el => el === "Sublimacja")
      latex = data.zadruk.findIndex(el => el === "Latex")
   }

   const containerOnTop = (
      <div className={styles.tagsTopContainer}>
         {bestseller >= 0 && (
            <Tag
               type="best"
               text={text.tag.bestseller[0]}
               tooltip={text.tag.bestseller[1]}
            />
         )}
         {news >= 0 && (
            <Tag
               type="news"
               text={text.tag.news[0]}
               tooltip={text.tag.news[1]}
            />
         )}
      </div>
   )
   const containerOnBottom = (
      <div className={styles.tagsContainer}>
         {indoor >= 0 && outdoor >= 0 ? (
            <Tag
               type="inOut"
               text={text.tag.inOut[0]}
               tooltip={text.tag.inOut[1]}
            />
         ) : indoor >= 0 && outdoor < 0 ? (
            <Tag
               type="inOut"
               text={text.tag.indoor[0]}
               tooltip={text.tag.indoor[1]}
            />
         ) : outdoor >= 0 && indoor < 0 ? (
            <Tag
               type="inOut"
               text={text.tag.outdoor[0]}
               tooltip={text.tag.outdoor[1]}
            />
         ) : null}
         {sublimation >= 0 && (
            <Tag
               type="printing"
               text={text.tag.sublimation[0]}
               tooltip={text.tag.sublimation[1]}
            />
         )}
         {latex >= 0 && (
            <Tag
               type="printing"
               text={text.tag.latex[0]}
               tooltip={text.tag.latex[1]}
            />
         )}
         {uv >= 0 && (
            <Tag
               type="printing"
               text={text.tag.uv[0]}
               tooltip={text.tag.uv[1]}
            />
         )}
         {solvent >= 0 && (
            <Tag
               type="printing"
               text={text.tag.solvent[0]}
               tooltip={text.tag.solvent[1]}
            />
         )}
      </div>
   )
   return top ? containerOnTop : bottom ? containerOnBottom : null
}

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

   return (
      <article className={styles.ProductCard}>
         <div className={styles.imageContainer}>
            <div className={styles.arrowLeft} onClick={imgPrev}>
               <RiArrowLeftSLine />
            </div>
            <img
               src={data.zdjecia[imgIndex].fixed.src}
               className={styles.image}
               alt={data.nazwa}
            />
            <div className={styles.arrowRight} onClick={imgNext}>
               <RiArrowRightSLine />
            </div>
            <TagsContainer data={data} text={textContent.products} top />
            <TagsContainer data={data} text={textContent.products} bottom />
         </div>
         <div className={styles.aboutContainer}>
            <H2>{data.nazwa}</H2>
            <Paragraph addClass={styles.paragraph}>{data.opisKrotki}</Paragraph>
            <RhombusBtn link={`/${data.url}`} type="link">
               {textContent.products.productCard[0]}
            </RhombusBtn>
         </div>
      </article>
   )
}
export default ProductCard
