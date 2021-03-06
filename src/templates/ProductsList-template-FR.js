import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import ProductsNav from "../components/Products/ProductsNav/ProductsNav"
import ProductsList from "../components/Products/ProductsList/ProductsList"
import { contentFR } from "../content/contentFR"
import groupOfProductsHandler from "../utils/groupOfProductsHandler"

const ProductsListTemplate = ({ data: { Products } }) => {
   const { rodzaj } = Products.nodes[0]
   const groupOfProducts = groupOfProductsHandler(contentFR, rodzaj)

   return (
      <Layout language="FR">
         <SEO
            title={`${contentFR.seo.prodTitle} ${groupOfProducts} | Impression grand format - Poznań | PrintXL`}
            description={`${contentFR.seo.prodDesc} ${groupOfProducts}`}
            lang="fr"
         />
         <ProductsNav />
         <ProductsList data={Products} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Products: allContentfulProduktyFr(
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
