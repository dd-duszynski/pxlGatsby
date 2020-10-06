import React from "react"
import BlogCard from "../BlogCard/BlogCard"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./BlogList.module.scss"

const getPosts = graphql`
   {
      postyPL: allContentfulBlogPl {
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

const BlogList = () => {
   const { postyPL } = useStaticQuery(getPosts)
   return (
      <section className={styles.BlogList}>
         {postyPL.edges.map((item, index) => {
            return <BlogCard key={index} blog={item} />
         })}
      </section>
   )
}

export default BlogList
