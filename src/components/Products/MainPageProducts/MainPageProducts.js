import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Context from "../../../context/context"
import styles from "./MainPageProducts.module.scss"
import LeftBar from "../../UI/Bars/LeftBar"
import RightBar from "../../UI/Bars/RightBar"
import RhombusLink from "../../UI/RhombusLink/RhombusLink"
import ProductCard from "../ProductCard/ProductCard"

const MainPageProducts = () => {
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
                     ...GatsbyContentfulFluid
                  }
               }
               url
            }
         }
      }
   `)
   const { textContent } = useContext(Context)
   return (
      <section className={styles.Products}>
         <div className={styles.container}>
            <LeftBar text={textContent.mainPage.productSection.header} />
            <RightBar />
            <div className={styles.productsContainer}>
               {data.Produkty.nodes.map(item => {
                  return <ProductCard data={item} key={item.nazwa} />
               })}
            </div>
         </div>
         <RhombusLink
            link={`/${textContent.products.mainLink}`}
            addClass={styles.seeAll}
         >
            {textContent.mainPage.productSection.seeAllBtn}
         </RhombusLink>
      </section>
   )
}

export default MainPageProducts
