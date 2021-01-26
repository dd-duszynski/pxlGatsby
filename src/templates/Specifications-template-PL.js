import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import SpecificationsNav from "../components/Specifications/SpecificationsNav/SpecificationsNav"
import SpecificationsList from "../components/Specifications/SpecificationsList/SpecificationsList"
import seoPL from "../content/seoPL"

const SpecificationsTemplate = ({ data: { Products } }) => {
   const { rodzaj } = Products.nodes[0]
   let groupOfTemplates
   switch (rodzaj) {
      case "banners":
         groupOfTemplates = seoPL.groupOfProducts[1]
         break
      case "flags":
         groupOfTemplates = seoPL.groupOfProducts[2]
         break
      case "rollups":
         groupOfTemplates = seoPL.groupOfProducts[3]
         break
      case "walls":
         groupOfTemplates = seoPL.groupOfProducts[4]
         break
      case "stands":
         groupOfTemplates = seoPL.groupOfProducts[5]
         break
      case "tribunes":
         groupOfTemplates = seoPL.groupOfProducts[6]
         break
      case "others":
         groupOfTemplates = seoPL.groupOfProducts[7]
         break
      case "covid":
         groupOfTemplates = seoPL.groupOfProducts[0]
         break
      default:
         groupOfTemplates = seoPL.groupOfProducts[1]
   }

   return (
      <Layout language="PL">
         <SEO
            title={`PrintXL - Specyfikacje - ${groupOfTemplates}`}
            description={`${seoPL.specifications} ${groupOfTemplates}`}
            lang="pl"
         />
         <SpecificationsNav />
         <SpecificationsList data={Products} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Products: allContentfulProduktyPl(
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
