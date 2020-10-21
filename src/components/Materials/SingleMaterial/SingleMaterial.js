import React from "react"
import ReactImageMagnify from "react-image-magnify"
import styles from "./SingleMaterial.module.scss"
import H3 from '../../UI/Headers/H3'
import Paragraph from '../../UI/Paragraph/Paragraph'
import { GeneralPL } from "../../../content/GeneralPL"
import { GeneralEN } from "../../../content/GeneralEN"
import { GeneralDE } from "../../../content/GeneralDE"
import { GeneralFR } from "../../../content/GeneralFR"

class SingleMaterial extends React.Component {
   state = {
      isSmallDevice: false,
   }
   updateDimensions = () => {
      if (window.innerWidth <= 1000) {
         this.setState({
            isSmallDevice: true,
         })
      } else {
         this.setState({
            isSmallDevice: false,
         })
      }
   }

   componentDidMount() {
      this.updateDimensions()
      window.addEventListener("resize", this.updateDimensions)
   }

   componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions)
   }

   render() {
      let lang
      switch (this.props.language) {
         case "PL":
            lang = GeneralPL
            break
         case "EN":
            lang = GeneralEN
            break
         case "DE":
            lang = GeneralDE
            break
         case "FR":
            lang = GeneralFR
            break
         default:
            lang = GeneralEN
      }

      let hintText = lang.MaterialSection[0]
      const data = this.props.data

      const imageMagnify = (
         <div className={styles.Material}>
            <div className={styles.imgContainer} id={data.id}>
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
                     hintTextMouse: hintText,
                  }}
               />
            </div>

            <div className={styles.textContainer}>
               {/* <div> */}
                  <H3>{data.nazwa}</H3>
               {/* </div> */}
               <Paragraph>{data.opis.opis}</Paragraph>
               <Paragraph>
                  <strong>{lang.MaterialSection[1]}:</strong> {data.zadruk}
               </Paragraph>
               <Paragraph>
                  <strong>
                     {lang.MaterialSection[2]}:{" "}
                  </strong> 
                  {data.szerokosc}
               </Paragraph>
            </div>
            <div className={styles.Material_line}></div>
         </div>
      )

      const imageForSmallerDevices = (
         <div className={styles.MaterialSmall}>
            <div className={styles.imgContainerSmall} id={data.id}>
               <img
                  src={data.zdjecia.fluid.src}
                  className={styles.imageSmall}
                  alt={data.nazwa}
               ></img>
            </div>

            <div className={styles.textContainer}>
               <div>
                  <h3>{data.nazwa}</h3>
               </div>
               <p>{data.opis.opis}</p>
               <p>
                  <strong>{lang.MaterialSection[1]}:</strong> {data.zadruk}
               </p>
               <p>
                  <strong>
                     {lang.MaterialSection[2]}:
                  </strong> 
                  {data.szerokosc}
               </p>
            </div>
            <div className={styles.Material_line}></div>
         </div>
      )

      return this.state.isSmallDevice ? imageForSmallerDevices : imageMagnify
   }
}
export default SingleMaterial
