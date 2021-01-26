import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Post from "../components/Blog/Post/Post"

const BlogTemplate = ({ data }) => {
   //opis do rozwinięcia
   return (
      <Layout language="PL">
         <SEO
            title={data.post.tytul}
            description="desc"
            lang="pl"
         />
         <Post
            data={data.post}
         />
      </Layout>
   )
}
export const query = graphql`
   
   query($name: String!) {
      post: contentfulBlogPl(tytul: { eq: $name }) {
         tytul
         dataPublikacji(formatString: "DD-MM-YYYY")
         tekst{
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
