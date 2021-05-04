import React, { Component } from "react"
import ContactContainer from "../../components/Contact/ContactContainer"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"

class Contact extends Component {
   render() {
      return (
         <Layout language="PL">
            <SEO
               title="Kontakt | Druk Wielkoformatowy - Poznań | PrintXL"
               description="Strona kontaktowa firmy PrintXL. Zapraszamy do kontaktu telefonicznego bądź przez napisanie maila bezpośrednio ze strony."
               lang="pl"
            />
            <ContactContainer />
         </Layout>
      )
   }
}

export default Contact
