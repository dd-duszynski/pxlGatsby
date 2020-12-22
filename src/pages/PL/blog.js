import React from "react"
import Layout from "../../components/Layout/Layout"
import BlogList from "../../components/Blog/BlogList/BlogList"
import SEO from "../../components/SEO/SEO"
import SearchBar from "../../components/Blog/Search/SearchBar"
import { graphql } from "gatsby"

const blog = ({ data }) => {
   console.log(data)
   return (
      <Layout language="PL">
         <SEO title="PrintXL - Blog" />
         <BlogList data={data.allContentfulBlogPl.edges} />
         <SearchBar />
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
               tresc {
                  tresc
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
