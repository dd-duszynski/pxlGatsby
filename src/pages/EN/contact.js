import React, { Component } from "react"
import ContactContainer from "../../components/Contact/ContactContainer"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"

class Contact extends Component {
   render() {
      return (
         <Layout language="EN">
            <SEO
               title="PrintXL - Contact"
               description="Contact page. Feel free to contact us - Write to us!"
               lang="en"
            />
            <ContactContainer />
         </Layout>
      )
   }
}

export default Contact