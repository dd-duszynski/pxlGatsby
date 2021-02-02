import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Post from "../components/Blog/Post/Post"

const BlogTemplate = ({ data: { post } }) => {
   return (
      <Layout language="EN">
         <SEO 
            title={`PrintXL - ${post.tytul}`} 
            description={post.tytul} 
            lang="en" 
         />
         <Post data={post} />
      </Layout>
   )
}
export const query = graphql`
   query($name: String!) {
      post: contentfulBlogEn(tytul: { eq: $name }) {
         tytul
         dataPublikacji(formatString: "DD-MM-YYYY")
         tekst {
            json
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