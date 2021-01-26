import React from "react"
import { graphql } from "gatsby"
import Material from "../components/Materials/Materials"
import Layout from "../components/Layout/Layout"
import MaterialsNav from "../components/Materials/MaterialsNav/MaterialsNav"
import SEO from "../components/SEO/SEO"

const MaterialsTemplate = ({ data: { Materials } }) => {
   // grupa materiałów do wyciągnięcia
   return (
      <Layout language="FR">
         <SEO
            title="PrintXL - Matériels"
            description="PrintXL - Matériels"
            lang="fr"
         />
         <MaterialsNav />
         <Material data={Materials} />
      </Layout>
   )
}

export const getData = graphql`
   query($materialType: String!) {
      Materials: allContentfulMaterialyFr(
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
