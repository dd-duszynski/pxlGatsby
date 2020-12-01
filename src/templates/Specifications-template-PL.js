import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import SpecificationsNav from "../components/Specifications/SpecificationsNav/SpecificationsNav"
import SpecificationsList from "../components/Specifications/SpecificationsList/SpecificationsList"

const SpecificationsTemplate = ({ data: { Produkty } }) => {
   return (
      <Layout language="PL">
         <SEO title="PrintXL - Specyfikacje" />
         <SpecificationsNav />
         <SpecificationsList data={Produkty} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Produkty: allContentfulProduktyPl(
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
            id
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
               fluid {
                  ...GatsbyContentfulFluid
               }
            }
         }
      }
   }
`
export default SpecificationsTemplate
