import React from "react"
import { graphql } from "gatsby"
import Material from "../components/Materials/Materials"
import Layout from "../components/Layout/Layout"
import MaterialsNav from "../components/Materials/MaterialsNav/MaterialsNav"
import SEO from "../components/SEO/SEO"

const MaterialsTemplate = ({ data: { Materials } }) => {
   return (
      <Layout language="EN">
         <SEO title="PrintXL - Materiały" />
         <MaterialsNav language="EN" />
         <Material data={Materials} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Materials: allContentfulMaterialyEn(
         sort: { fields: nazwa }
         filter: { rodzaj: { eq: $name } }
      ) {
         nodes {
            nazwa
            id
            zadruk
            szerokosc
            opis {
               opis
            }
            rodzaj
            zdjecia {
               fluid {
                  ...GatsbyContentfulFluid
               }
            }
         }
      }
   }
`
export default MaterialsTemplate
