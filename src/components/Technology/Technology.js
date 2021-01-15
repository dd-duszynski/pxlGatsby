import React, { useContext, useEffect, useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { RICHTEXT_OPTIONS } from "../UI/RichText/RichText"
import Context from "../../context/context"
import styles from "./Technology.module.scss"
import H2 from "../UI/Headers/H2"
import Paragraph from "../UI/Paragraph/Paragraph"
import ProductCard from "../Products/ProductCard/ProductCard"
import Carousel from "../Carousel/Carousel"
import { GiRolledCloth } from "react-icons/gi"
import { Link } from "gatsby"

const Technology = ({ machine }) => {
   const [isSmallDevice, setSmallDevice] = useState(false)
   const { textContent } = useContext(Context)
   const [...images] = machine.zdjecia

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
         <article className={styles.container}>

            <div className={styles.paragraphBox}>
               <H2 addClass={styles.header}>
                  {textContent.technology.description.text[0]}
               </H2>
               {documentToReactComponents(machine.tekst.json, RICHTEXT_OPTIONS)}
               <Carousel>
                  {images.map(item => {
                     return (
                        <img
                           alt=""
                           src={item.fluid.src}
                           className={styles.img}
                           key={item.fluid.src}
                        />
                     )
                  })}
               </Carousel>
               <div className={styles.line} />
            </div>
         
            <div className={styles.paragraphBox}>
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
            <div className={styles.line} />

            <div className={styles.paragraphBox}>
               <H2 addClass={styles.header}>
                  {textContent.technology.description.text[2]}
               </H2>
               <Paragraph>{machine.opisMaterialow.opisMaterialow}:</Paragraph>
               {machine.materialy.map(item => (
                  <div className={styles.iconContainer} key={item.nazwa}>
                     <GiRolledCloth className={styles.icon} />
                     <Link
                        className={styles.link}
                        to={`${textContent.productPage.materialLink}/${item.rodzaj}/#${item.kod}`}
                     >
                        {item.nazwa}
                     </Link>
                  </div>
               ))}
            </div>
         </article>
      </section>
   )
}

export default Technology
