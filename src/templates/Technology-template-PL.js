import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
import TechnologyNav from "../components/Technology/TechnologyNav/TechnologyNav"
import Technology from "../components/Technology/Technology"
import SEO from "../components/SEO/SEO"

const TechnologyTemplate = ({ data, pageContext }) => {
   const { nazwa, zdjecia, opis } = data.contentfulTechnologiePl

   // const [mainImage, ...otherImages] = zdjecia
   const [...images] = zdjecia

   return (
      <Layout language="PL">
         <SEO title={`PrintXL - ${nazwa}`} />
         <TechnologyNav language="PL" />
         <Technology 
            nazwa={nazwa} 
            zdjecia={zdjecia} 
            opis={opis}
         />
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
         url
         eco
         id
         zdjecia {
            fluid {
               ...GatsbyContentfulFluid
            }
         }
      }
   }
`

export default TechnologyTemplate
