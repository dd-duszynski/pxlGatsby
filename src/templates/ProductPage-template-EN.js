import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import ProductPage from "../components/ProductPage/ProductPage"
import SEO from "../components/SEO/SEO"

const ProductPageTemplate = ({ data }) => {
   const { nazwa, opisKrotki } = data.products
   return (
      <Layout language="EN">
         <SEO
            title={`PrintXL - ${nazwa}`}
            description={`${nazwa} - ${opisKrotki}`}
            lang="en"
         />
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
