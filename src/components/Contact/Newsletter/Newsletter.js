import React from "react"
import styles from "./Newsletter.module.scss"
import Paragraph from "../../UI/Paragraph/Paragraph"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
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
                  type="text"
                  name="name"
                  placeholder={text[1]}
               />
               <Input
                  type="email"
                  name="email"
                  placeholder={text[2]}
               />
               <RhombusBtn 
                  addClass={styles.submitInput} 
                  text={text[7]}
                  type="input" 
               />
            </form>
         </div>
      </div>
   )
}

export default Newsletter
