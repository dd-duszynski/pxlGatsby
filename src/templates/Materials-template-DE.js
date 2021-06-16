import React from "react"
import { graphql } from "gatsby"
import Material from "../components/Materials/Materials"
import Layout from "../components/Layout/Layout"
import MaterialsNav from "../components/Materials/MaterialsNav/MaterialsNav"
import SEO from "../components/SEO/SEO"
import { contentDE } from "../content/contentDE"
import groupOfProductsHandler from "../utils/groupOfProductsHandler"

const MaterialsTemplate = ({ data: { Materials } }) => {
   const { rodzaj } = Materials.nodes[0]
   const groupOfProducts = groupOfProductsHandler(contentDE, rodzaj)

   return (
      <Layout language="DE">
         <SEO
            title={`${contentDE.seo.matTitle} ${groupOfProducts} | PrintXL`}
            description={`${contentDE.seo.matDesc} ${groupOfProducts}`}
            lang="de"
         />
         <MaterialsNav />
         <Material data={Materials} />
      </Layout>
   )
}

export const getData = graphql`
   query($materialType: String!) {
      Materials: allContentfulMaterialyDe(
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
