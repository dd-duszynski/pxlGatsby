import React from "react"
import styles from "./TagsContainer.module.scss"
import Tag from "../../UI/Tag/Tag"

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

export default TagsContainer
