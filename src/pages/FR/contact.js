import React, { Component } from "react"
import ContactContainer from "../../components/Contact/ContactContainer"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"

class Contact extends Component {
   render() {
      return (
         <Layout language="FR">
            <SEO
               title="Contact | Impression grand format - Poznań | PrintXL"
               description="Page de contact pour PrintXL. Veuillez nous contacter par téléphone ou en écrivant un e-mail directement depuis le site Web."
               lang="fr"
            />
            <ContactContainer />
         </Layout>
      )
   }
}

export default Contact
