import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import ProductsNav from "../components/Products/ProductsNav/ProductsNav"
import ProductsList from "../components/Products/ProductsList/ProductsList"

const ProductsListTemplate = ({ data: { Produkty } }) => {
   return (
      <Layout language="PL">
         <SEO title="PrintXL - Produkty" />
         <ProductsNav language="PL" />
         <ProductsList data={Produkty}/>
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Produkty: allContentfulProduktyPl(
         sort: { fields: nazwa }
         filter: { rodzaj: { eq: $name } }
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
`
export default ProductsListTemplate
