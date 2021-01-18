import React, { useContext, useState, useEffect } from "react"
import ReactImageMagnify from "react-image-magnify"
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
         <ReactImageMagnify
            enlargedImageContainerClassName={
               styles.ImageMagnify_largeImageContainer
            }
            enlargedImageClassName={styles.ImageMagnify_largeImage}
            {...{
               smallImage: {
                  alt: data.nazwa,
                  src: data.zdjecia.fixed.src,
                  width: 426,
                  height: 284,
                  isFluidWidth: false,
               },
               largeImage: {
                  src: data.zdjecia.fixed.src,
                  width: 1200,
                  height: 800,
               },
               isHintEnabled: true,
               shouldHideHintAfterFirstActivation: false,
               hintTextMouse: textContent.materials.text[2],
            }}
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
      <div className={css} id={data.kod}>
         {isSmallDevice ? imageForSmallerDevices : imageMagnify}
         <div className={styles.textContainer}>
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
      </div>
   )
}
export default SingleMaterial
