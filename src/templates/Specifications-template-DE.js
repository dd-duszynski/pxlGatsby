import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import SpecificationsNav from "../components/Specifications/SpecificationsNav/SpecificationsNav"
import SpecificationsList from "../components/Specifications/SpecificationsList/SpecificationsList"
import { contentDE } from "../content/contentDE"

import groupOfProductsHandler from "../utils/groupOfProductsHandler"

const SpecificationsTemplate = ({ data: { Products } }) => {
   const { rodzaj } = Products.nodes[0]
   const groupOfProducts = groupOfProductsHandler(contentDE, rodzaj)

   return (
      <Layout language="DE">
         <SEO
            title={`${contentDE.seo.specTitle} ${groupOfProducts}`}
            description={`${contentDE.seo.specDesc} ${groupOfProducts}`}
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
               title
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
