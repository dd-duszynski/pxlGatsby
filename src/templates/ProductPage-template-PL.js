import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import ProductPage from "../components/ProductPage/ProductPage"

const ProductPageTemplate = ({ data }) => {
   return (
      <Layout language="PL">
         <ProductPage data={data} />
      </Layout>
   )
}

export const query = graphql`
   query($name: String!) {
      contentfulProduktyPl(nazwa: { eq: $name }) {
         rodzaj
         nazwa
         opisKrotki
         url
         zalety
         polecaneMateriay {
            nazwa
         }
         zdjecia {
            fluid {
               src
            }
         }
         wymiary {
            fluid {
               src
            }
         }
         opis {
            opis
            content{
               content{
                 value
               }
             }
         }
         opcjeProduktu
         zadruk
         specyfikacje {
            title
            file {
               url
               fileName
            }
         }
      }
   }
`

export default ProductPageTemplate
