import React from "react"
import Layout from "../../components/Layout/Layout"
// import BlogList from "../../components/Blog/BlogList/BlogList"
import SEO from "../../components/SEO/SEO"

const blog = () => {
   return (
      <Layout language="DE">
         <SEO title="PrintXL - Blog" />
         <h1>Blog DE</h1>
         {/* <BlogList language="DE" /> */}
      </Layout>
   )
}

export default blog
