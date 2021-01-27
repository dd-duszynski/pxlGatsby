import React, { Component } from "react"
import ContactContainer from "../../components/Contact/ContactContainer"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"

class Contact extends Component {
   render() {
      return (
         <Layout language="FR">
            <SEO
               title="PrintXL - Contact"
               description="Page de contact. N'hésitez pas à nous contacter - Écrivez-nous!"
               lang="fr"
            />
            <ContactContainer />
         </Layout>
      )
   }
}

export default Contact
