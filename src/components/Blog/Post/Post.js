import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Post = () => {
   const { posty } = useStaticQuery(graphql`
      {
         posty: allContentfulBlogPl {
            edges {
               node {
                  tytul
                  dataPublikacji(formatString: "DD-MMMM-Y")
                  tresc {
                     tresc
                  }
               }
            }
         }
      }
   `)

   return (
      <div>
         {posty.edges.map((item, index) => {
            return <h2 key={index}>{item.node.tytul}</h2>
         })}
      </div>
   )
}
export default Post
