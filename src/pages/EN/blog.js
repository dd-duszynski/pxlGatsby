import React from "react"
import Layout from "../../components/Layout/Layout"
import BlogList from "../../components/Blog/BlogList/BlogList"
import SEO from "../../components/SEO/SEO"

const blog = () => {
   return (
      <Layout language="EN">
         <SEO title="PrintXL - BlogXX" />
         <h1>Blog EN</h1>
         <BlogList language="EN" />
      </Layout>
   )
}

export default blog
