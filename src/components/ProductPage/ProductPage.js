import React, { useContext } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Context from "../../context/context"
import Carousel from "../Carousel/Carousel"
import Paragraph from "../UI/Paragraph/Paragraph"
import H1 from "../UI/Headers/H1"
import H2 from "../UI/Headers/H2"
import RhombusLink from "../UI/RhombusLink/RhombusLink"
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs"
import { GiRolledCloth } from "react-icons/gi"
import { AiOutlineCheck, AiOutlineFilePdf } from "react-icons/ai"
import styles from "./ProductPage.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BtnContainer = ({ text }) => {
   return (
      <div className={styles.btnContainer}>
         <RhombusLink addClass={styles.btn}>{text}</RhombusLink>
      </div>
   )
}

const ProductPage = ({ data }) => {
   const { textContent } = useContext(Context)
   console.log("textContent", textContent)
   console.log("ProductPage", data.contentfulProduktyPl)
   const {
      nazwa,
      zdjecia,
      opis,
      zalety,
      polecaneMateriay,
      specyfikacje,
   } = data.contentfulProduktyPl

   const [...images] = zdjecia
   const options = {
      renderNode: {
         "embedded-asset-block": node => {
            console.log(node)
         },
      },
   }
   return (
      <main className={styles.ProductPage}>
         <div className={styles.leftSection}>
            <Breadcrumbs
               b1={textContent.productPage.breadcrumbs[0]}
               b2={textContent.productPage.breadcrumbs[0]}
               b3={textContent.productPage.breadcrumbs[0]}
            />
            <Carousel>
               {images.map((item, index) => {
                  return (
                     <div className={styles.imgContainer}>
                        <img
                           src={item.fluid.src}
                           alt={nazwa}
                           key={index}
                           className={styles.img}
                        />
                     </div>
                  )
               })}
            </Carousel>
            <BtnContainer text="Zainteresowany? Napisz do Nas!" />
         </div>
         <div className={styles.rightSection}>
            <H1 addClass={styles.header}>{nazwa}</H1>
            <Paragraph addClass={styles.paragraph}>
               {opis.content[0].content[0].value}
            </Paragraph>
            <H2 addClass={styles.header}>Zalety produktu:</H2>
            {zalety.map(item => {
               return (
                  <div className={styles.iconContainer}>
                     <AiOutlineCheck className={styles.icon} />
                     <Paragraph addClass={styles.paragraph}>{item}</Paragraph>
                  </div>
               )
            })}
            <H2 addClass={styles.header}>Polecane materiały:</H2>
            {polecaneMateriay.map(item => {
               return (
                  <div className={styles.iconContainer}>
                     <GiRolledCloth className={styles.icon} />
                     <Paragraph addClass={styles.paragraph}>
                        {item.nazwa}
                     </Paragraph>
                  </div>
               )
            })}
            <H2 addClass={styles.header}>Instrukcje DTP:</H2>
            {specyfikacje.map(item => {
               return (
                  <div className={styles.iconContainer}>
                     <AiOutlineFilePdf className={styles.icon} />
                     <Paragraph addClass={styles.paragraph}>
                        {item.title}
                     </Paragraph>
                  </div>
               )
            })}

            <H2 addClass={styles.header}>Przykładowe wymiary [cm]:</H2>
            <BtnContainer text="Zainteresowany? Napisz do Nas!" />
         </div>
      </main>
   )
}

export default ProductPage
