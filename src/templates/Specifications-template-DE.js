import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import SpecificationsNav from "../components/Specifications/SpecificationsNav/SpecificationsNav"
import SpecificationsList from "../components/Specifications/SpecificationsList/SpecificationsList"
import seoDE from "../content/seoDE"

const SpecificationsTemplate = ({ data: { Products } }) => {
   const { rodzaj } = Products.nodes[0]
   let groupOfTemplates
   switch (rodzaj) {
      case "banners":
         groupOfTemplates = seoDE.groupOfProducts[1]
         break
      case "flags":
         groupOfTemplates = seoDE.groupOfProducts[2]
         break
      case "rollups":
         groupOfTemplates = seoDE.groupOfProducts[3]
         break
      case "walls":
         groupOfTemplates = seoDE.groupOfProducts[4]
         break
      case "stands":
         groupOfTemplates = seoDE.groupOfProducts[5]
         break
      case "tribunes":
         groupOfTemplates = seoDE.groupOfProducts[6]
         break
      case "others":
         groupOfTemplates = seoDE.groupOfProducts[7]
         break
      case "covid":
         groupOfTemplates = seoDE.groupOfProducts[0]
         break
      default:
         groupOfTemplates = seoDE.groupOfProducts[1]
   }
   return (
      <Layout language="DE">
         <SEO
            title={`PrintXL - Druckdatenvorbereitung - ${groupOfTemplates}`}
            description={`${seoDE.specifications} ${groupOfTemplates}`}
            lang="de"
         />
         <SpecificationsNav />
         <SpecificationsList data={Products} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Products: allContentfulProduktyDe(
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
