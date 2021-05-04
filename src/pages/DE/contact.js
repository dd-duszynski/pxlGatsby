import React, { Component } from "react"
import ContactContainer from "../../components/Contact/ContactContainer"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"

class Contact extends Component {
   render() {
      return (
         <Layout language="DE">
            <SEO
               title="Kontakt | Großformatdruck - Posen | PrintXL"
               description="Kontaktseite für PrintXL. Bitte kontaktieren Sie uns telefonisch oder per E-Mail direkt von der Website."
               lang="de"
            />
            <ContactContainer />
         </Layout>
      )
   }
}

export default Contact