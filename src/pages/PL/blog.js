import React from "react"
import Layout from "../../components/Layout/Layout"
import BlogList from "../../components/Blog/BlogList/BlogList"
import SEO from "../../components/SEO/SEO"
import SearchBar from "../../components/Blog/Search/SearchBar"

const blog = () => {
   return (
      <Layout language="PL">
         <SEO title="PrintXL - Blog" />
         <BlogList language="PL" />
         <SearchBar/>
      </Layout>
   )
}

export default blog
