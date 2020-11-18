import React, { useContext } from "react"
import Context from "../../context/context"
import styles from "./Technology.module.scss"
import H2 from "../UI/Headers/H2"
import Paragraph from "../UI/Paragraph/Paragraph"
import ProductCard from "../Products/ProductCard/ProductCard"
import Carousel from "../Carousel/Carousel"
import SingleMaterial from "../../components/Materials/SingleMaterialTech/SingleMaterialTech"
const Technology = ({ machine }) => {
   const [...images] = machine.zdjecia
   const { textContent } = useContext(Context)

   return (
      <section className={styles.Technology}>
         <article className={styles.container}>
            <div className={styles.paragraphBox}>
               <H2 addClass={styles.header}>
                  {textContent.technology.description.text[0]}
               </H2>
               <Paragraph addClass={styles.paragraph}>
                  {machine.opis.opis}
               </Paragraph>
               <Carousel>
                  {images.map(item => {
                     return (
                        <img
                           alt=""
                           src={item.fluid.src}
                           className={styles.img}
                        />
                     )
                  })}
               </Carousel>
            </div>
            <div className={styles.line}></div>
            <div className={styles.paragraphBox}>
               <H2 addClass={styles.header}>
                  {textContent.technology.description.text[1]}
               </H2>
               <Paragraph addClass={styles.paragraph}>
                  Poniżej znajduje się lista powiązanych produktów. Znajdą
                  Państwo wśród nich np. Beachflagi, Namioty czy Skarpety.
               </Paragraph>
               <Carousel itemsToShow={2}>
                  {machine.produkty.map(item => {
                     return <ProductCard data={item} key={item.nazwa} />
                  })}
               </Carousel>
            </div>
            <div className={styles.line}></div>
            <div className={styles.paragraphBox}>
               <H2 addClass={styles.header}>
                  {textContent.technology.description.text[2]}
               </H2>
               <Paragraph addClass={styles.paragraph}>
                  Poniżej znajduje się lista powiązanych produktów. Znajdą
                  Państwo wśród nich np. Beachflagi, Namioty czy Skarpety.
               </Paragraph>
               <Carousel itemsToShow={1}>
                  {machine.materialy.map(item => {
                     return (
                        <SingleMaterial
                           data={item}
                           language="PL"
                           key={item.nazwa}
                        />
                     )
                  })}
               </Carousel>
            </div>
         </article>
      </section>
   )
}

export default Technology
