import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
import { FaMoneyBillWave } from "react-icons/fa"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProductPageTemplate = ({ data, pageContext }) => {
   const {
      nazwa,
      zdjecia,
      opis: { json },
   } = data.contentfulProduktyPl

   // const opisValue = opis.content[0].content[0].value
   const [...otherImages] = zdjecia

   const options = {
      renderNode: {
         "embedded-asset-block": node => {
            console.log(node)
         },
      },
   }
   return (
      <Layout language="PL">
         <h1>
            <FaMoneyBillWave style={{ color: "blue" }} />
            {nazwa}
         </h1>
         {/* <p>{opisValue}</p> */}
         {documentToReactComponents(json, options)}
         {otherImages.map((item, index) => {
            return <Img fluid={item.fluid} alt={nazwa} key={index} />
         })}
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
         }
      }
   }
`

export default ProductPageTemplate
