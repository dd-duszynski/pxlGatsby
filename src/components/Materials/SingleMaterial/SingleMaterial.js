import React, { useContext, useState, useEffect } from "react"
import ReactImageMagnify from "react-image-magnify"
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
      <div className={styles.Material} id={data.kod}>
         <div className={styles.imgContainer} >
            <ReactImageMagnify
               // imageClassName={styles.ImageMagnify_smallImage}
               enlargedImageContainerClassName={
                  styles.ImageMagnify_largeImageContainer
               }
               enlargedImageClassName={styles.ImageMagnify_largeImage}
               {...{
                  smallImage: {
                     alt: data.nazwa,
                     src: data.zdjecia.fluid.src,
                     width: 426,
                     height: 284,
                     isFluidWidth: false,
                  },
                  largeImage: {
                     src: data.zdjecia.fluid.src,
                     width: 1200,
                     height: 800,
                  },
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                  hintTextMouse: textContent.materials.text[2],
               }}
            />
         </div>

         <div className={styles.textContainer}>
            <H2>{data.nazwa}</H2>
            <Paragraph>{data.opis.opis}</Paragraph>
            <Paragraph>
               <strong>{textContent.materials.text[0]}</strong> {data.zadruk}
            </Paragraph>
            <Paragraph>
               <strong>{textContent.materials.text[1]}</strong>
               {data.szerokosc}
            </Paragraph>
         </div>
         <div className={styles.line}></div>
      </div>
   )

   const imageForSmallerDevices = (
      <div className={styles.MaterialSmall}>
         <div className={styles.imgContainerSmall} id={data.id}>
            <img
               className={styles.imageSmall}
               src={data.zdjecia.fluid.src}
               alt={data.nazwa}
            />
         </div>

         <div className={styles.textContainer}>
            <H2 addClass={styles.marginTop}>{data.nazwa}</H2>
            <Paragraph addClass={styles.marginTop}>{data.opis.opis}</Paragraph>
            <Paragraph addClass={styles.marginTop}>
               <strong>{textContent.materials.text[0]}</strong> {data.zadruk}
            </Paragraph>
            <Paragraph addClass={styles.marginTop}>
               <strong>{textContent.materials.text[1]}</strong>
               {data.szerokosc}
            </Paragraph>
         </div>
         <div className={styles.line}></div>
      </div>
   )

   return isSmallDevice ? imageForSmallerDevices : imageMagnify
}
export default SingleMaterial
