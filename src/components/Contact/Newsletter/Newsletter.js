import React, { useState, useEffect } from "react"
import styles from "./Newsletter.module.scss"
import Paragraph from "../../UI/Paragraph/Paragraph"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
import Input from "../../UI/Input/Input"
import { FaSmile } from "react-icons/fa"

const Newsletter = ({ text }) => {
   const [isSend, setIsSend] = useState(false)
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")

   const handleSubmit = event => {
      event.preventDefault()
      const client = {
         firstName: name,
         email: email,
         language: "PL",
      }
      fetch("https://printxl-newsletter.firebaseio.com/list.json", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            firstName: name,
            email: email,
            language: "PL",
         }),
      }).then(resizeTo => {
         setIsSend(true)
         setName("")
         setEmail("")
         setTimeout(() => setIsSend(false), 4000)
      })
   }

   const handleName = e => {
      setName(e.target.value)
   }
   const handleEmail = e => {
      setEmail(e.target.value)
   }

   const initialView = (
      <>
         <Paragraph addClass={styles.paragraph}>{text[5]}</Paragraph>
         <Paragraph addClass={styles.paragraph}>{text[6]}</Paragraph>
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
            <RhombusBtn text={text[7]} type="input" />
         </form>
      </>
   )

   const afterSigning = (
      <div className={styles.afterMessageSend}>
         <Paragraph>{text[11]}</Paragraph>
         <FaSmile className={styles.icon} />
      </div>
   )

   return (
      <div className={styles.Newsletter}>
         {isSend ? afterSigning : initialView}
      </div>
   )
}

export default Newsletter
