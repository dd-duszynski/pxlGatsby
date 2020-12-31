import React, { useState } from "react"
import styles from "./ContactForm.module.scss"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
import Input from "../../UI/Input/Input"
import TextArea from "../../UI/Input/TextArea"

const ContactForm = ({ text }) => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")

   const handleSubmit = event => {
      event.preventDefault()
      
      fetch("https://pxl-server.herokuapp.com/email", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            subject: window.location.href
         }),
      })
         .then(response => response.json())
         .then(data => {
            console.log("Success:", data)
         })
         .catch(error => {
            console.error("Error:", error)
         })
   }

   const handleName = e => {
      setName(e.target.value)
   }
   const handleEmail = e => {
      setEmail(e.target.value)
   }
   const handleMessage = e => {
      setMessage(e.target.value)
   }
   return (
      <section className={styles.ContactForm}>
         <header className={styles.header}>{text[8]}</header>
         <form className={styles.form} onSubmit={handleSubmit}>
            <Input
               val={name}
               onChange={handleName}
               type="text"
               name="name"
               placeholder={text[1]}
            />
            <Input
               val={email}
               onChange={handleEmail}
               type="email"
               name="email"
               placeholder={text[2]}
            />
            <TextArea
               val={message}
               onChange={handleMessage}
               type="message"
               name="message"
               placeholder={text[3]}
            />
            <RhombusBtn input text={text[4]} type="input" />
         </form>
      </section>
   )
}

export default ContactForm
