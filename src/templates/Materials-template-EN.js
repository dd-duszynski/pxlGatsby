import React from "react"
import { graphql } from "gatsby"
import Material from "../components/Materials/Materials"
import Layout from "../components/Layout/Layout"
import MaterialsNav from "../components/Materials/MaterialsNav/MaterialsNav"
import SEO from "../components/SEO/SEO"
import { contentEN } from "../content/contentEN"
import groupOfProductsHandler from "../utils/groupOfProductsHandler"

const MaterialsTemplate = ({ data: { Materials } }) => {
   const { rodzaj } = Materials.nodes[0]
   const groupOfProducts = groupOfProductsHandler(contentEN, rodzaj)

   return (
      <Layout language="EN">
         <SEO
            title={`${contentEN.seo.matTitle} ${groupOfProducts} | PrintXL`}
            description={`${contentEN.seo.matDesc} ${groupOfProducts}`}
            lang="en"
         />
         <MaterialsNav />
         <Material data={Materials} />
      </Layout>
   )
}

export const getData = graphql`
   query($materialType: String!) {
      Materials: allContentfulMaterialyEn(
         sort: { fields: nazwa }
         filter: { rodzaj: { eq: $materialType } }
      ) {
         nodes {
            id
            rodzaj
            nazwa
            tekst {
               json
            }
            szerokosc
            zdjecia {
               fixed(height: 1200) {
                  ...GatsbyContentfulFixed
               }
            }
            kod
            opcje
            druk
         }
      }
   }
`

export default MaterialsTemplate
