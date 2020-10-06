import React from "react"
import styles from "./ContactContainer.module.scss"
import ContactForm from "./ContactForm/ContactForm"
import ContactInfo from "./ContactInfo/ContactInfo"
import Newsletter from "./Newsletter/Newsletter"
import { GeneralPL } from "../../content/GeneralPL"
// import LanguageContext from "../../context/context"

const ContactContainer = props => {
   // const langContext = useContext(LanguageContext)
   const { Contact } = GeneralPL

   return (
      <section className={styles.ContactContainer} id="contact">
         <div className={styles.container}>
            <div className={styles.header}>{Contact[0]}</div>
            <ContactInfo text={Contact} />
            <div className={styles.verticalLine} />
            <ContactForm text={Contact} />
         </div>
         <Newsletter language="PL" />
      </section>
   )
}

export default ContactContainer
