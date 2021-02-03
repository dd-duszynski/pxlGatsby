import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import ProductsNav from "../components/Products/ProductsNav/ProductsNav"
import ProductsList from "../components/Products/ProductsList/ProductsList"
import {contentPL} from "../content/contentPL"
import groupOfProductsHandler from "../utils/groupOfProductsHandler"

const ProductsListTemplate = ({ data: { Products } }) => {
   const { rodzaj } = Products.nodes[0]
   const groupOfProducts = groupOfProductsHandler(contentPL, rodzaj)

   return (
      <Layout language="PL">
         <SEO
            title={`${contentPL.seo.prodTitle} ${groupOfProducts}`}
            description={`${contentPL.seo.prodDesc} ${groupOfProducts}`}
            lang="pl"
         />
         <ProductsNav />
         <ProductsList data={Products} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Products: allContentfulProduktyPl(
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
               fixed(height: 220) {
                  ...GatsbyContentfulFixed
               }
            }
         }
      }
   }
`
export default ProductsListTemplate
