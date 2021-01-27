import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import ProductsNav from "../components/Products/ProductsNav/ProductsNav"
import ProductsList from "../components/Products/ProductsList/ProductsList"
import { contentEN } from "../content/contentEN"
import groupOfProductsHandler from "../utils/groupOfProductsHandler"

const ProductsListTemplate = ({ data: { Products } }) => {
   const { rodzaj } = Products.nodes[0]
   const groupOfProducts = groupOfProductsHandler(contentEN, rodzaj)

   return (
      <Layout language="EN">
         <SEO
            title={`${contentEN.seo.prodTitle} ${groupOfProducts}`}
            description={`${contentEN.seo.prodDesc} ${groupOfProducts}`}
            lang="en"
         />
         <ProductsNav />
         <ProductsList data={Products} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Products: allContentfulProduktyEn(
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
