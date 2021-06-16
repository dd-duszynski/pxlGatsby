import React, { useState } from "react"
import { FaSmile } from "react-icons/fa"
import styles from "./ContactForm.module.scss"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
import Input from "../../UI/Input/Input"
import TextArea from "../../UI/Input/TextArea"
import Paragraph from "../../UI/Paragraph/Paragraph"
import Recaptcha from "./Recaptcha"

const ContactForm = ({ text }) => {
   const [isSend, setIsSend] = useState(false)
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")
   const [isRecaptchaVisible, setRecaptchaVisible] = useState(false)

   const showRecaptcha = event => {
      event.preventDefault()
      setRecaptchaVisible(true)
   }

   const handleSubmit = token => {
      // event.preventDefault()

      // heroku - production
      // https://pxl-server.herokuapp.com/email

      // localhost - development
      // http://localhost:5000/email

      fetch("https://pxl-server.herokuapp.com/email", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            subject: window.location.href,
            captcha: token,
         }),
      })
         .then(response => response.json())
         .then(data => {
            return
            // console.log("Success:", data)
         })
         .catch(error => {
            console.error("Error:", error)
         })
      setRecaptchaVisible(false)
      setIsSend(true)
      setName("")
      setEmail("")
      setMessage("")
      setTimeout(() => setIsSend(false), 5000)
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

   const afterMessageSend = (
      <div className={styles.afterMessageSend}>
         <Paragraph>{text[10]}</Paragraph>
         <FaSmile className={styles.icon} />
      </div>
   )

   const initialView = (
      <>
         <Paragraph addClass={styles.formHeader}>{text[8]}</Paragraph>
         <form className={styles.form} onSubmit={showRecaptcha}>
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
            <RhombusBtn text={text[4]} type="input" />
         </form>
      </>
   )

   return (
      <section className={styles.ContactForm}>
         {isRecaptchaVisible ? (
            <Recaptcha verifyCallback={handleSubmit} />
         ) : isSend ? (
            afterMessageSend
         ) : (
            initialView
         )}
      </section>
   )
}

export default ContactForm
