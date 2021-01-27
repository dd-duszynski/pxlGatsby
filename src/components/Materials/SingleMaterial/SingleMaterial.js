import React, { useContext, useState, useEffect } from "react"
import { RICHTEXT_OPTIONS } from "../../UI/RichText/RichText"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TagsContainer from "../../ProductPage/TagsContainer/TagsContainer"
import styles from "./SingleMaterial.module.scss"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"
import Context from "../../../context/context"

const SingleMaterial = ({ data }) => {
   const [isSmallDevice, setSmallDevice] = useState(false)
   const { textContent } = useContext(Context)
   const updateDimensions = () => {
      if (window.innerWidth <= 1000) {
         setSmallDevice(true)
      } else {
         setSmallDevice(false)
      }
   }

   useEffect(() => {
      updateDimensions()
      window.addEventListener("resize", updateDimensions)
      return () => {
         window.removeEventListener("resize", updateDimensions)
      }
   }, [])

   const imageMagnify = (
      <div className={styles.imgContainer}>
         <img
            src={data.zdjecia.fixed.src}
            alt={data.nazwa}
            className={styles.img}
         />
      </div>
   )

   const imageForSmallerDevices = (
      <div className={styles.imgContainerSmall} id={data.id}>
         <img
            className={styles.imageSmall}
            src={data.zdjecia.fixed.src}
            alt={data.nazwa}
         />
      </div>
   )

   const css = isSmallDevice ? styles.MaterialSmall : styles.Material
   return (
      <article className={css} id={data.kod}>
         {isSmallDevice ? imageForSmallerDevices : imageMagnify}
         <div className={styles.textContainer}>
            <div className={styles.bar} />
            <H2>{data.nazwa}</H2>
            <TagsContainer zadruk={data.druk} opcjeProduktu={data.opcje} />
            {documentToReactComponents(data.tekst.json, RICHTEXT_OPTIONS)}
            <Paragraph>
               <strong>{textContent.materials.text[0]}</strong>
               {data.druk && data.druk.join(", ")}
            </Paragraph>
            <Paragraph>
               <strong>{textContent.materials.text[1]}</strong>
               {data.szerokosc}
            </Paragraph>
         </div>
         <div className={styles.line}></div>
      </article>
   )
}
export default SingleMaterial
