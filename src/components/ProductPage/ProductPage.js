import React, { useContext } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Context from "../../context/context"
import Layout from "../Layout/Layout"
import Carousel from "../Carousel/Carousel"
import Paragraph from "../UI/Paragraph/Paragraph"
import H1 from "../UI/Headers/H1"
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs"
import { FaMoneyBillWave } from "react-icons/fa"
import styles from "./ProductPage.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProductPage = ({ data }) => {
   const { textContent } = useContext(Context)
   console.log("textContent", textContent)
   console.log("ProductPage", data.contentfulProduktyPl)
   const {
      nazwa,
      zdjecia,
      opis,
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
                     <img
                        src={item.fluid.src}
                        alt={nazwa}
                        key={index}
                        className={styles.imgContainer}
                     />
                  )
               })}
            </Carousel>
         </div>
         <div className={styles.rightSection}>
            <H1>{nazwa}</H1>
            <Paragraph>
               Test
            </Paragraph>
         </div>
      </main>
   )
}

export default ProductPage
