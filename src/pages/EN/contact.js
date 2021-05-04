import React, { Component } from "react"
import ContactContainer from "../../components/Contact/ContactContainer"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"

class Contact extends Component {
   render() {
      return (
         <Layout language="EN">
            <SEO
               title="Contact | Large Format Printing - Poznań | PrintXL"
               description="Contact page for PrintXL. Please contact us by phone or by writing an e-mail directly from the website."
               lang="en"
            />
            <ContactContainer />
         </Layout>
      )
   }
}

export default Contact