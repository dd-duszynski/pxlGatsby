import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SearchBar from '../components/Blog/Search/SearchBar'
import BlogCard from "../components/Blog/BlogCard/BlogCard"

const BlogCategory = ({data}) => {
   const {postyPL} = data
   return (
      <Layout language="PL">
         <section>
            {postyPL.edges.map((item, index) => {
               return <BlogCard key={index} blog={item} />
            })}
         </section>
         <SearchBar />
      </Layout>
   )
}

export const query = graphql`
   query($name: String) {
      postyPL: allContentfulBlogPl(filter: { kategorie: { eq: $name } }) {
         edges {
            node {
               tytul
               kategorie
               zdjecia {
                  fluid {
                     ...GatsbyContentfulFluid
                  }
               }
               dataPublikacji(formatString: "DD-MM-YYYY")
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

export default BlogCategory
