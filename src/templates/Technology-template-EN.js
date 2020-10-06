import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
// import Hero from "../components/Hero/Hero"
import TechnologyNav from "../components/Technology/TechnologyNav/TechnologyNav"
import SEO from "../components/SEO/SEO"

const TechnologyTemplate = ({ data }) => {
   const { nazwa, zdjecia, opis } = data.contentfulTechnologieEn
   // const [mainImage, ...otherImages] = zdjecia
   const [...otherImages] = zdjecia

   return (
      <Layout language="EN">
         <SEO title={`PrintXL - ${nazwa}`} />
         <TechnologyNav language="EN" />
         {/* <Hero img={mainImage.fluid}>Hello</Hero> */}
         <h1>{nazwa}</h1>
         <p>{opis.opis}</p>
         {otherImages.map((item, index) => {
            return <Img fluid={item.fluid} alt={nazwa} key={index} />
         })}
      </Layout>
   )
}

export const query = graphql`
   query($name: String!) {
      contentfulTechnologieEn(url: { eq: $name }) {
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
