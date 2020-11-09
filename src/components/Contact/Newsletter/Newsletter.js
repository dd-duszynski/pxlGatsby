import React from "react"
import styles from "./Newsletter.module.scss"
import Paragraph from "../../UI/Paragraph/Paragraph"
import RhombusInput from "../../UI/RhombusInput/RhombusInput"
import Input from "../../UI/Input/Input"

const Newsletter = ({ text }) => {
   return (
      <div className={styles.Newsletter}>
         <div className={styles.container}>
            <Paragraph addClass={styles.paragraph}>{text[6]}</Paragraph>
            <Paragraph addClass={styles.paragraph}>{text[7]}</Paragraph>

            <form className={styles.form}>
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
               <RhombusInput addClass={styles.submitInput} text={text[8]} />
            </form>
         </div>
      </div>
   )
}

export default Newsletter
