import React, { Component } from "react"
import ContactContainer from "../../components/Contact/ContactContainer"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"

class Contact extends Component {
   render() {
      return (
         <Layout language="DE">
            <SEO title="PrintXL - Kontaktiere uns!" />
            <ContactContainer />
         </Layout>
      )
   }
}

export default Contact