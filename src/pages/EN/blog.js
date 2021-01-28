import React from "react"
import Layout from "../../components/Layout/Layout"
import BlogList from "../../components/Blog/BlogList/BlogList"
import SEO from "../../components/SEO/SEO"
import BlogSearchBar from "../../components/Blog/SearchBar/SearchBar"
import { graphql } from "gatsby"

const blog = ({ data }) => {
   return (
      <Layout language="EN">
         <SEO
            title="PrintXL - Blog"
            description="PrintXL - Blog"
            lang="en"
         />
         <BlogList data={data.blog.edges} />
         <BlogSearchBar />
      </Layout>
   )
}

export const query = graphql`
   {
      blog: allContentfulBlogEn {
         edges {
            node {
               tytul
               dataPublikacji(formatString: "DD-MM-Y")
               tekst {
                  json
               }
               trescKrotka {
                  trescKrotka
               }
               kategorie
               zdjecia {
                  fluid {
                     ...GatsbyContentfulFluid
                  }
               }
            }
         }
      }
   }
`

export default blog
