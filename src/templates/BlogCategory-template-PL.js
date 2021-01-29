import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import BlogList from "../components/Blog/BlogList/BlogList"
import BlogSearchBar from "../components/Blog/SearchBar/SearchBar"
import SEO from "../components/SEO/SEO"

const BlogCategory = ({ data: { posts } }) => {
   return (
      <Layout language="PL">
         <SEO title="PrintXL - Blog" description="PrintXL - Blog" lang="pl" />
         <BlogList data={posts.edges} />
         <BlogSearchBar />
      </Layout>
   )
}

export const query = graphql`
   query($category: String) {
      posts: allContentfulBlogPl(filter: { kategorie: { eq: $category } }) {
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

export default BlogCategory
