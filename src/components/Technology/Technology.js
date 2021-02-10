import React, { useContext, useEffect, useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { RICHTEXT_OPTIONS } from "../UI/RichText/RichText"
import Context from "../../context/context"
import styles from "./Technology.module.scss"
import H2 from "../UI/Headers/H2"
import Paragraph from "../UI/Paragraph/Paragraph"
import ProductCard from "../Products/ProductCard/ProductCard"
import Carousel from "../Carousel/Carousel"
import SingleMaterial from "../Materials/SingleMaterial/SingleMaterial"
import Modal from "../Modal/Modal"

const Technology = ({ machine }) => {
   const [isImgModalOpen, setImgModalOpen] = useState(false)
   const [isSmallDevice, setSmallDevice] = useState(false)
   const [currentImg, setCurrentImg] = useState(null)
   const { textContent } = useContext(Context)
   const [...images] = machine.zdjecia
   console.log(machine)
   let specificationArray = []
   const parsedValue = JSON.parse(machine.specyfikacja.internal.content)
   for (const [key, value] of Object.entries(parsedValue)) {
      specificationArray.push([key, value])
   }
   const switchImgModalVisibility = e => {
      setCurrentImg(e.target.src)
      isImgModalOpen === false ? setImgModalOpen(true) : setImgModalOpen(false)
   }

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

   return (
      <section className={styles.Technology}>
         <Modal
            type="img"
            isVisible={isImgModalOpen}
            switchModalVisibility={switchImgModalVisibility}
         >
            <img className={styles.modalImg} src={currentImg} alt="" />
         </Modal>
         <article className={styles.container}>
            <Carousel>
               {images.map(item => (
                  <img
                     alt="PrintXL - Technology"
                     src={item.fluid.src}
                     className={styles.img}
                     key={item.fluid.src}
                     onClick={e => switchImgModalVisibility(e)}
                  />
               ))}
            </Carousel>
            <div className={styles.table}>
               {specificationArray.map(i => (
                  <div className={styles.innerTable} key={`${i[0]}`}>
                     <div className={styles.innerTableTop}>
                        <Paragraph bold>{i[0]}:</Paragraph>
                     </div>
                     <div className={styles.innerTableBottom}>
                        <Paragraph>{i[1]}</Paragraph>
                     </div>
                  </div>
               ))}
            </div>
            <div className={styles.paragraphBox}>
               <H2 addClass={styles.header}>
                  {machine.nazwa} - {textContent.technology.description.text[0]}
               </H2>
               {documentToReactComponents(machine.tekst.json, RICHTEXT_OPTIONS)}
            </div>
            <div className={[styles.paragraphBox, styles.mb].join(" ")}>
               <H2 addClass={styles.header}>
                  {textContent.technology.description.text[1]}
               </H2>
               <Paragraph addClass={styles.paragraph}>
                  {machine.opisProduktow.opisProduktow}
               </Paragraph>
               <Carousel itemsToShow={isSmallDevice ? 1 : 2}>
                  {machine.produkty.map(item => {
                     return <ProductCard data={item} key={item.nazwa} />
                  })}
               </Carousel>
            </div>
            <div className={styles.paragraphBox}>
               <H2 addClass={styles.header}>
                  {textContent.technology.description.text[2]}
               </H2>
               <Paragraph
                  addClass={[styles.paragraph, styles.marginBottom].join(" ")}
               >
                  {machine.opisMaterialow.opisMaterialow}
               </Paragraph>
               {machine.materialy.map(item => {
                  return (
                     <SingleMaterial
                        key={item.kod}
                        data={item}
                        onClick={e => switchImgModalVisibility(e)}
                     />
                  )
               })}
            </div>
         </article>
      </section>
   )
}

export default Technology
