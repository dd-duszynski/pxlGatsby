import React from "react"
import styles from "./ContactForm.module.scss"
import RhombusInput from '../../UI/RhombusInput/RhombusInput'

const ContactForm = ({ text }) => {
   return (
      <section className={styles.ContactForm}>
         <header className={styles.header}>{text[7]}</header>
         <form
            action="https://formspree.io/dd.duszynski@gmail.com"
            method="POST"
            className={styles.form}
         >
            <div>
               <label htmlFor="name">{text[2]}:</label>
               <input
                  className={styles.formControl}
                  type="text"
                  name="name"
                  id="name"
               />
            </div>
            <div>
               <label htmlFor="email">{text[3]}:</label>
               <input
                  className={styles.formControl}
                  type="email"
                  name="email"
                  id="email"
               />
            </div>
            <div>
               <label htmlFor="message">{text[4]}:</label>
               <textarea
                  className={styles.formControl}
                  name="message"
                  id="message"
                  row="10"
               />
            </div>
            <RhombusInput
               // addClass={styles.submitBtn}
               input
               text={text[6]}
            />
         </form>
      </section>
   )
}

export default ContactForm
