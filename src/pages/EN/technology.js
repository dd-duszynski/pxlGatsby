import React, { Component } from "react"
import Layout from "../../components/Layout/Layout"
import TechnologyNav from "../../components/Technology/TechnologyNav/TechnologyNav"
import SEO from "../../components/SEO/SEO"

export class technology extends Component {
   render() {
      return (
         <Layout language="EN">
            <SEO title="PrintXL - Sublimacja" />
            <TechnologyNav language="EN" />
         </Layout>
      )
   }
}

export default technology
