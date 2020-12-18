import React from "react"
import styles from "./Newsletter.module.scss"
import Paragraph from "../../UI/Paragraph/Paragraph"
import RhombusInput from "../../UI/RhombusInput/RhombusInput"
import Input from "../../UI/Input/Input"

const Newsletter = ({ text }) => {
   return (
      <div className={styles.Newsletter}>
         <div className={styles.container}>
            <Paragraph addClass={styles.paragraph}>
               {text[5]}
            </Paragraph>
            <Paragraph addClass={styles.paragraph}>
               {text[6]}
            </Paragraph>
            <form className={styles.form}>
               <Input
                  idFor="name"
                  type="text"
                  name="firstName"
                  placeholder={text[1]}
               />
               <Input
                  idFor="email"
                  type="email"
                  name="email"
                  placeholder={text[2]}
               />
               <RhombusInput 
                  addClass={styles.submitInput} 
                  text={text[7]} 
               />
            </form>
         </div>
      </div>
   )
}

export default Newsletter
