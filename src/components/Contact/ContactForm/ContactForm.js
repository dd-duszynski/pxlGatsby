import React from "react"
import styles from "./ContactForm.module.scss"
import RhombusInput from '../../UI/RhombusInput/RhombusInput'
import Input from "../../UI/Input/Input"
import TextArea from "../../UI/Input/TextArea"

const ContactForm = ({ text }) => {
   return (
      <section className={styles.ContactForm}>
         <header className={styles.header}>{text[9]}</header>
         <form
            action="https://formspree.io/dd.duszynski@gmail.com"
            method="POST"
            className={styles.form}
         >
            <Input
               idFor="name"
               type="text"
               name="firstName"
               placeholder={text[2]}
            />
            <Input
               idFor="email"
               type="email"
               name="email"
               placeholder={text[3]}
            />
            <TextArea
               idFor="message"
               type="message"
               name="message"
               placeholder={text[4]}
            />
            <RhombusInput
               input
               text={text[5]}
            />
         </form>
      </section>
   )
}

export default ContactForm
