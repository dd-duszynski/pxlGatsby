import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import SpecificationsNav from "../components/Specifications/SpecificationsNav/SpecificationsNav"
import SpecificationsList from "../components/Specifications/SpecificationsList/SpecificationsList"
import seoEN from "../content/seoEN"

const SpecificationsTemplate = ({ data: { Products } }) => {
   const { rodzaj } = Products.nodes[0]
   let groupOfTemplates
   switch (rodzaj) {
      case "banners":
         groupOfTemplates = seoEN.groupOfProducts[1]
         break
      case "flags":
         groupOfTemplates = seoEN.groupOfProducts[2]
         break
      case "rollups":
         groupOfTemplates = seoEN.groupOfProducts[3]
         break
      case "walls":
         groupOfTemplates = seoEN.groupOfProducts[4]
         break
      case "stands":
         groupOfTemplates = seoEN.groupOfProducts[5]
         break
      case "tribunes":
         groupOfTemplates = seoEN.groupOfProducts[6]
         break
      case "others":
         groupOfTemplates = seoEN.groupOfProducts[7]
         break
      case "covid":
         groupOfTemplates = seoEN.groupOfProducts[0]
         break
      default:
         groupOfTemplates = seoEN.groupOfProducts[1]
   }

   return (
      <Layout language="EN">
         <SEO 
            title={`PrintXL - Specifications - ${groupOfTemplates}`}
            description={`${seoEN.specifications} ${groupOfTemplates}`}
            lang="en"   
         />
         <SpecificationsNav />
         <SpecificationsList data={Products} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Products: allContentfulProduktyEn(
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
