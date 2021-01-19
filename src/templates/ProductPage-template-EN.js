import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import ProductPage from "../components/ProductPage/ProductPage"

const ProductPageTemplate = ({ data }) => {
   return (
      <Layout language="EN">
         <ProductPage data={data} />
      </Layout>
   )
}

export const query = graphql`
   query($name: String!) {
      products: contentfulProduktyEn(nazwa: { eq: $name }) {
         rodzaj
         nazwa
         opisKrotki
         url
         zalety
         polecaneMateriay {
            nazwa
            id
            kod
            rodzaj
         }
         zdjecia {
            fluid {
               ...GatsbyContentfulFluid
            }
         }
         wymiary {
            file {
               url
            }
         }
         opis {
            json
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
