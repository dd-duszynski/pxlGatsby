import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import TechnologyNav from "../components/Technology/TechnologyNav/TechnologyNav"
import Technology from "../components/Technology/Technology"
import SEO from "../components/SEO/SEO"

const TechnologyTemplate = ({ data }) => {
   const { nazwa } = data.TechnologiePl

   return (
      <Layout language="PL">
         <SEO title={`PrintXL - Technologie - ${nazwa}`} />
         <TechnologyNav />
         <Technology machine={data.TechnologiePl} />
      </Layout>
   )
}

export const query = graphql`
   query($name: String!) {
      TechnologiePl: contentfulTechnologiePl(url: { eq: $name }) {
         nazwa
         tekst {
            json
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
               fixed(height: 190) {
                  ...GatsbyContentfulFixed
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
               fixed(height: 1200) {
                  ...GatsbyContentfulFixed
               }
            }
         }
      }
   }
`

export default TechnologyTemplate
