import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import Specifications from "../../components/Specifications/Specifications"

const specifications = ({ data }) => {
   return (
      <Layout language="PL">
         <Specifications data={data} />
      </Layout>
   )
}
export const query = graphql`
   {
      Produkty: allContentfulProduktyPl {
         nodes {
            id
            rodzaj
            nazwa
            specyfikacje {
               file {
                  fileName
                  url
               }
            }
            zdjecia {
               fixed(height: 100) {
                  src
               }
            }
         }
      }
   }
`

export default specifications
