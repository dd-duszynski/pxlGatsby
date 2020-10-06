import React from "react"
import styles from "./ContactForm.module.scss"

const ContactForm = ({ text }) => {
   return (
      <section className={styles.ContactForm}>
         <header>{text[7]}</header>
         <form
            action="https://formspree.io/dd.duszynski@gmail.com"
            method="POST"
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
            <div>
               <input
                  className={styles.submit}
                  value={text[6]}
                  type="submit"
                  id="submit"
               />
            </div>
         </form>
      </section>
   )
}

export default ContactForm
