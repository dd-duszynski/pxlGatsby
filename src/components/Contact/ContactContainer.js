import React, { useContext } from "react"
import Context from "../../context/context"
import styles from "./ContactContainer.module.scss"
import ContactForm from "./ContactForm/ContactForm"
import ContactInfo from "./ContactInfo/ContactInfo"
import Newsletter from "./Newsletter/Newsletter"
import H2 from "../UI/Headers/H2"

const Contact = () => {
   const { textContent } = useContext(Context)
   return (
      <section className={styles.Contact} id="contact">
         <div className={styles.container}>
            <div className={styles.headerBox}>
               <H2 addClass={styles.header}>
                  {textContent.mainPage.contact.header}
               </H2>
            </div>
            <ContactInfo text={textContent.mainPage.contact.text} />
            <div className={styles.verticalLine} />
            <ContactForm text={textContent.mainPage.contact.text} />
         </div>
         <Newsletter text={textContent.mainPage.contact.text} />
      </section>
   )
}

export default Contact
