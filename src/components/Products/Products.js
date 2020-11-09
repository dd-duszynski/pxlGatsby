import React, {useContext} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Context from "../../context/context"
import styles from "./Products.module.scss"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"
import RhombusLink from "../UI/RhombusLink/RhombusLink"
import ProductCard from "./ProductCard/ProductCard"
import {contentPL} from '../../content/contentPL';

const Products = () => {
   const data = useStaticQuery(graphql`
      query {
         Produkty: allContentfulProduktyPl(
            filter: { opcjeProduktu: { eq: "Strona Główna" } }
            limit: 12
         ) {
            nodes {
               nazwa
               zadruk
               opcjeProduktu
               opis {
                  content {
                     content {
                        value
                     }
                  }
               }
               opisKrotki
               rodzaj
               zdjecia {
                  fluid {
                     src
                  }
               }
               url
            }
         }
      }
   `)
   const { language } = useContext(Context)
   return (
      <section className={styles.Products}>
         <div className={styles.container}>
            <LeftBar text={contentPL.mainPage.productSection[0]} />
            <RightBar />
            <div className={styles.productsContainer}>
               {data.Produkty.nodes.map(item => {
                  return <ProductCard data={item} key={item.nazwa} />
               })}
            </div>
         </div>
         <RhombusLink link="PL/products" addClass={styles.seeAll}>
            {contentPL.mainPage.productSection[1]}
         </RhombusLink>
      </section>
   )
}

export default Products
