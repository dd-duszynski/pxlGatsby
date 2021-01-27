import React, { Component } from "react"
import ContactContainer from "../../components/Contact/ContactContainer"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"

class Contact extends Component {
   render() {
      return (
         <Layout language="PL">
            <SEO
               title="PrintXL - Kontakt"
               description="Strona kontaktowa. Zapraszamy do kontaktu - Napisz do Nas!"
               lang="pl"
            />
            <ContactContainer />
         </Layout>
      )
   }
}

export default Contact
