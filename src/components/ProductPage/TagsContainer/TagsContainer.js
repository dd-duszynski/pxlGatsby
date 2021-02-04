import React, { useContext } from "react"
import Context from "../../../context/context"
import styles from "./TagsContainer.module.scss"
import Tag from "../../UI/Tag/Tag"

const TagsContainer = ({ zadruk, opcjeProduktu }) => {
   console.log(opcjeProduktu)
   const { textContent } = useContext(Context)

   let uv, solvent, sublimation, latex
   if (zadruk) {
      uv = zadruk.findIndex(el => el === "UV")
      solvent = zadruk.findIndex(el => el === "Solvent")
      sublimation = zadruk.findIndex(el => el === "Sublimacja")
      latex = zadruk.findIndex(el => el === "Latex")
   }

   let indoor,
      outdoor,
      news,
      bestseller,
      doubleSide,
      backlight,
      stoplight,
      nonFlammable,
      waterproof

   if (opcjeProduktu) {
      indoor = opcjeProduktu.findIndex(el => el === "Indoor")
      outdoor = opcjeProduktu.findIndex(el => el === "Outdoor")
      doubleSide = opcjeProduktu.findIndex(el => el === "4+4")
      backlight = opcjeProduktu.findIndex(el => el === "Podświetlany")
      stoplight = opcjeProduktu.findIndex(el => el === "Blokujący światło")
      nonFlammable = opcjeProduktu.findIndex(el => el === "Ognioodporny")
      waterproof = opcjeProduktu.findIndex(el => el === "Wodoszczelny")
      news = opcjeProduktu.findIndex(el => el === "Nowość")
      bestseller = opcjeProduktu.findIndex(el => el === "Bestseller")
   }

   return (
      <div className={styles.tagsContainer}>
         {bestseller >= 0 && (
            <Tag
               type="best"
               text={textContent.products.tag.bestseller[0]}
               tooltip={textContent.products.tag.bestseller[1]}
            />
         )}
         {news >= 0 && (
            <Tag
               type="news"
               text={textContent.products.tag.news[0]}
               tooltip={textContent.products.tag.news[1]}
            />
         )}
         {indoor >= 0 && outdoor >= 0 ? (
            <Tag
               type="inOut"
               text={textContent.products.tag.inOut[0]}
               tooltip={textContent.products.tag.inOut[1]}
            />
         ) : indoor >= 0 && outdoor < 0 ? (
            <Tag
               type="inOut"
               text={textContent.products.tag.indoor[0]}
               tooltip={textContent.products.tag.indoor[1]}
            />
         ) : outdoor >= 0 && indoor < 0 ? (
            <Tag
               type="inOut"
               text={textContent.products.tag.outdoor[0]}
               tooltip={textContent.products.tag.outdoor[1]}
            />
         ) : null}
         {sublimation >= 0 && (
            <Tag
               type="printing"
               text={textContent.products.tag.sublimation[0]}
               tooltip={textContent.products.tag.sublimation[1]}
            />
         )}
         {latex >= 0 && (
            <Tag
               type="printing"
               text={textContent.products.tag.latex[0]}
               tooltip={textContent.products.tag.latex[1]}
            />
         )}
         {uv >= 0 && (
            <Tag
               type="printing"
               text={textContent.products.tag.uv[0]}
               tooltip={textContent.products.tag.uv[1]}
            />
         )}
         {solvent >= 0 && (
            <Tag
               type="printing"
               text={textContent.products.tag.solvent[0]}
               tooltip={textContent.products.tag.solvent[1]}
            />
         )}
         {/* ---------------- */}
         {doubleSide >= 0 && (
            <Tag
               type="printing"
               text={textContent.products.tag.doubleSide[0]}
               tooltip={textContent.products.tag.doubleSide[1]}
            />
         )}
         {backlight >= 0 && (
            <Tag
               type="backlight"
               text={textContent.products.tag.backlight[0]}
               tooltip={textContent.products.tag.backlight[1]}
            />
         )}
         {stoplight >= 0 && (
            <Tag
               type="stoplight"
               text={textContent.products.tag.stoplight[0]}
               tooltip={textContent.products.tag.stoplight[1]}
            />
         )}
         {nonFlammable >= 0 && (
            <Tag
               type="nonFlammable"
               text={textContent.products.tag.nonFlammable[0]}
               tooltip={textContent.products.tag.nonFlammable[1]}
            />
         )}
         {waterproof >= 0 && (
            <Tag
               type="waterproof"
               text={textContent.products.tag.waterproof[0]}
               tooltip={textContent.products.tag.waterproof[1]}
            />
         )}
         {/* -------------------- */}
      </div>
   )
}

export default TagsContainer
