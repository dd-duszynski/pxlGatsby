import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import ProductPage from "../components/ProductPage/ProductPage"
import SEO from "../components/SEO/SEO"

const ProductPageTemplate = ({ data }) => {
   const { nazwa, opisKrotki } = data.products

   return (
      <Layout language="DE">
         <SEO
            title={`${nazwa} | Großformatdruck - Posen | PrintXL`}
            description={`${nazwa} - ${opisKrotki}`}
            lang="de"
         />
         <ProductPage data={data} />
      </Layout>
   )
}

export const query = graphql`
   query($name: String!) {
      products: contentfulProduktyDe(nazwa: { eq: $name }) {
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
