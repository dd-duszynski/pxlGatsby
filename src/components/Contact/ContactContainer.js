import React, { useContext } from "react"
import Context from "../../context/context"
import styles from "./ContactContainer.module.scss"
import ContactForm from "./ContactForm/ContactForm"
import ContactInfo from "./ContactInfo/ContactInfo"
import Newsletter from "./Newsletter/Newsletter"
import BoxHeader from '../UI/BoxHeader/BoxHeader'

const Contact = () => {
   const { textContent } = useContext(Context)
   return (
      <section className={styles.Contact} id="contact">
         <div className={styles.container}>
            <BoxHeader
               text={textContent.mainPage.contact.header}
            />
            <ContactInfo text={textContent.mainPage.contact.text} />
            <div className={styles.line} />
            <ContactForm text={textContent.mainPage.contact.text} />
         </div>
         <Newsletter text={textContent.mainPage.contact.text} />
      </section>
   )
}

export default Contact
