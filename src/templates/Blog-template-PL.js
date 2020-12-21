import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO/SEO"

const BlogTemplate = ({ data }) => {
   
   const {
      tytul,
      dataPublikacji,
      tresc: { tresc },
   } = data.posty

   return (
      <Layout language="PL">
         <SEO title={tytul} />
         <section>
            <h1>{tytul}</h1>
            <p>{dataPublikacji}</p>
            <p>{tresc}</p>
            <AniLink fade to="PL/blog">
               Wróć na stronę
            </AniLink>
         </section>
      </Layout>
   )
}
export const query = graphql`
   
   query($name: String!) {
      posty: contentfulBlogPl(tytul: { eq: $name }) {
         tytul
         dataPublikacji(formatString: "DD-MM-YYYY")
         tresc {
            tresc
         }
         zdjecia {
            fluid {
               ...GatsbyContentfulFluid
            }
         }
      }
   }
`

export default BlogTemplate
