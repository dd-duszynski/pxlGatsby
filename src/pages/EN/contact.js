import React, { Component } from "react"
import ContactContainer from "../../components/Contact/ContactContainer"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"

class Contact extends Component {
   render() {
      return (
         <Layout language="EN">
            <SEO title="PrintXL - Contact us!" />
            <ContactContainer />
         </Layout>
      )
   }
}

export default Contact