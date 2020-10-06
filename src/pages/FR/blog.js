import React from "react"
import Layout from "../../components/Layout/Layout"
// import BlogList from "../../components/Blog/BlogList/BlogList"
import SEO from "../../components/SEO/SEO"

const blog = () => {
   return (
      <Layout language="FR">
         <SEO title="PrintXL - Blog" />
         <h1>Blog FR</h1>
         {/* <BlogList language="FR" /> */}
      </Layout>
   )
}

export default blog
