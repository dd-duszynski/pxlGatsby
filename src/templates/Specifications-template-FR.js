import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import SpecificationsNav from "../components/Specifications/SpecificationsNav/SpecificationsNav"
import SpecificationsList from "../components/Specifications/SpecificationsList/SpecificationsList"
import seoFR from "../content/seoFR"

const SpecificationsTemplate = ({ data: { Products } }) => {
   const { rodzaj } = Products.nodes[0]
   let groupOfTemplates
   switch (rodzaj) {
      case "banners":
         groupOfTemplates = seoFR.groupOfProducts[1]
         break
      case "flags":
         groupOfTemplates = seoFR.groupOfProducts[2]
         break
      case "rollups":
         groupOfTemplates = seoFR.groupOfProducts[3]
         break
      case "walls":
         groupOfTemplates = seoFR.groupOfProducts[4]
         break
      case "stands":
         groupOfTemplates = seoFR.groupOfProducts[5]
         break
      case "tribunes":
         groupOfTemplates = seoFR.groupOfProducts[6]
         break
      case "others":
         groupOfTemplates = seoFR.groupOfProducts[7]
         break
      case "covid":
         groupOfTemplates = seoFR.groupOfProducts[0]
         break
      default:
         groupOfTemplates = seoFR.groupOfProducts[1]
   }
   return (
      <Layout language="FR">
         <SEO 
            title={`PrintXL - Spécifications - ${groupOfTemplates}`}
            description={`${seoFR.specifications} ${groupOfTemplates}`}
            lang="fr"   
         />
         <SpecificationsNav />
         <SpecificationsList data={Products} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Products: allContentfulProduktyFr(
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
