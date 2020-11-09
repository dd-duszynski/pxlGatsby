import React, {useContext} from "react"
import Context from '../../context/context'
import styles from "./ContactContainer.module.scss"
import ContactForm from "./ContactForm/ContactForm"
import ContactInfo from "./ContactInfo/ContactInfo"
import Newsletter from "./Newsletter/Newsletter"
import H2 from "../UI/Headers/H2"

const ContactContainer = () => {
   const { textContent } = useContext(Context)
   return (
      <section className={styles.ContactContainer} id="contact">
         <div className={styles.container}>
            <div className={styles.headerBox}>
               <H2 addClass={styles.header}>
                  {textContent.mainPage.contact[0]}
               </H2>
            </div>
            <ContactInfo text={textContent.mainPage.contact} />
            <div className={styles.verticalLine} />
            <ContactForm text={textContent.mainPage.contact} />
         </div>
         <Newsletter text={textContent.mainPage.contact}/>
      </section>
   )
}

export default ContactContainer
