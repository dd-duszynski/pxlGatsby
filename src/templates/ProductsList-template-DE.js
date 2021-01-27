import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import ProductsNav from "../components/Products/ProductsNav/ProductsNav"
import ProductsList from "../components/Products/ProductsList/ProductsList"
import { contentDE } from "../content/contentDE"
import groupOfProductsHandler from "../utils/groupOfProductsHandler"

const ProductsListTemplate = ({ data: { Products } }) => {
   const { rodzaj } = Products.nodes[0]
   const groupOfProducts = groupOfProductsHandler(contentDE, rodzaj)

   return (
      <Layout language="DE">
         <SEO
            title={`${contentDE.seo.prodTitle} ${groupOfProducts}`}
            description={`${contentDE.seo.prodDesc} ${groupOfProducts}`}
            lang="de"
         />
         <ProductsNav />
         <ProductsList data={Products} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Products: allContentfulProduktyDe(
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
