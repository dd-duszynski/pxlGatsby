import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import TechnologyNav from "../components/Technology/TechnologyNav/TechnologyNav"
import Technology from "../components/Technology/Technology"
import SEO from "../components/SEO/SEO"

const TechnologyTemplate = ({ data }) => {
   const { nazwa } = data.contentfulTechnologiePl

   return (
      <Layout language="PL">
         <SEO title={`PrintXL - Technologie - ${nazwa}`} />
         <TechnologyNav />
         <Technology machine={data.contentfulTechnologiePl} />
      </Layout>
   )
}

export const query = graphql`
   query($name: String!) {
      contentfulTechnologiePl(url: { eq: $name }) {
         nazwa
         opis {
            opis
         }
         opisProduktow {
            opisProduktow
         }
         opisMaterialow {
            opisMaterialow
         }
         url
         eco
         id
         zdjecia {
            fluid {
               ...GatsbyContentfulFluid
            }
         }
         produkty {
            nazwa
            zadruk
            opcjeProduktu
            opis {
               content {
                  content {
                     value
                  }
               }
            }
            opisKrotki
            rodzaj
            zdjecia {
               fluid {
                  ...GatsbyContentfulFluid
               }
            }
            url
         }
         materialy {
            nazwa
            rodzaj
            opis {
               opis
            }
            zadruk
            szerokosc
            kod
            zdjecia {
               fluid {
                  ...GatsbyContentfulFluid
               }
            }
         }
      }
   }
`

export default TechnologyTemplate
