import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import TechnologyNav from "../components/Technology/TechnologyNav/TechnologyNav"
import Technology from "../components/Technology/Technology"
import SEO from "../components/SEO/SEO"
import { contentPL } from "../content/contentPL"

const TechnologyTemplate = ({ data }) => {
   const { nazwa } = data.Technologie
   const { tekst } = data.Technologie

   return (
      <Layout language="PL">
         <SEO
            title={`${contentPL.seo.technologyTitle} ${nazwa}`}
            description={`${nazwa} - ${tekst.content[0].content[0].value}`}
            lang="pl"
         />
         <TechnologyNav />
         <Technology machine={data.Technologie} />
      </Layout>
   )
}

export const query = graphql`
   query($name: String!) {
      Technologie: contentfulTechnologiePl(url: { eq: $name }) {
         nazwa
         tekst {
            json
            content {
               content {
                  value
               }
            }
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
         specyfikacja {
            internal {
               content
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
            tekst {
               json
            }
            druk
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
