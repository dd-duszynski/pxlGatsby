import React, { useContext } from "react"
import Context from "../../../context/context"
import styles from "./TagsContainer.module.scss"
import Tag from "../../UI/Tag/Tag"

const TagsContainer = ({ zadruk, opcjeProduktu }) => {
   const { textContent } = useContext(Context)
   const uv = zadruk.findIndex(el => el === "UV")
   const solvent = zadruk.findIndex(el => el === "Solvent")
   const sublimation = zadruk.findIndex(el => el === "Sublimacja")
   const latex = zadruk.findIndex(el => el === "Latex")
   const indoor = opcjeProduktu.findIndex(el => el === "Indoor")
   const outdoor = opcjeProduktu.findIndex(el => el === "Outdoor")
   const news = opcjeProduktu.findIndex(el => el === "Nowość")
   const bestseller = opcjeProduktu.findIndex(el => el === "Bestseller")
   return (
      <div className={styles.tagsContainer}>
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
   )
}

export default TagsContainer
