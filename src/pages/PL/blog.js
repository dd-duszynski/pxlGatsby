import React from "react"
import Layout from "../../components/Layout/Layout"
import BlogList from "../../components/Blog/BlogList/BlogList"
import SEO from "../../components/SEO/SEO"
import BlogSearchBar from "../../components/Blog/SearchBar/SearchBar"
import { graphql } from "gatsby"

const blog = ({ data }) => {
   return (
      <Layout language="PL">
         <SEO title="PrintXL - Blog" />
         <BlogList data={data.allContentfulBlogPl.edges} />
         <BlogSearchBar />
      </Layout>
   )
}

export const query = graphql`
   {
      allContentfulBlogPl {
         edges {
            node {
               tytul
               kategorie
               zdjecia {
                  fluid {
                     ...GatsbyContentfulFluid
                  }
               }
               dataPublikacji(formatString: "DD-MM-Y")
               tekst {
                  json
               }
               trescKrotka {
                  trescKrotka
               }
            }
         }
      }
   }
`

export default blog
