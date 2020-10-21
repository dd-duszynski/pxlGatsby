import React from "react"
import Img from "gatsby-image"
import styles from "./Technology.module.scss"
import H1 from "../UI/Headers/H1"
import Paragraph from "../UI/Paragraph/Paragraph"
const Technology = ({ children, nazwa, zdjecia, opis }) => {
   console.log(nazwa, opis)
   const [...images] = zdjecia
   return (
      <section className={styles.Technology}>
         <article className={styles.container}>
            <H1>{nazwa}</H1>
            <Paragraph>{opis.opis}</Paragraph>

            {images.map((item, index) => {
               return <Img fluid={item.fluid} alt={nazwa} key={index} />
            })}
         </article>
      </section>
   )
}

export default Technology
