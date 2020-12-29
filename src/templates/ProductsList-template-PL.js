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
         <ProductsNav />
         <ProductsList data={Produkty} />
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
            opisKrotki
            rodzaj
            url
            opis {
               content {
                  content {
                     value
                  }
               }
            }
            specyfikacje {
               file {
                  fileName
                  url
               }
            }
            zdjecia {
               fixed(height: 190) {
                  ...GatsbyContentfulFixed
               }
            }
         }
      }
   }
`
export default ProductsListTemplate
