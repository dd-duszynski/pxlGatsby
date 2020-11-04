import React from "react"
import styles from "./Newsletter.module.scss"
import { GeneralPL } from "../../../content/GeneralPL"
import Paragraph from "../../UI/Paragraph/Paragraph"
import RhombusInput from "../../UI/RhombusInput/RhombusInput"
import Input from "../../UI/Input/Input"

const Newsletter = () => {
   let lang = GeneralPL

   return (
      <div className={styles.Newsletter}>
         <div className={styles.container}>
            <Paragraph addClass={styles.paragraph}>
               {lang.Newsletter[0]}
            </Paragraph>
            <Paragraph addClass={styles.paragraph}>
               {lang.Newsletter[1]}
            </Paragraph>

            <form className={styles.form}>
               <Input
                  idFor="name"
                  type="text"
                  name="firstName"
                  placeholder={lang.Newsletter[2]}
               />
               <Input
                  idFor="email"
                  type="email"
                  name="email"
                  placeholder={lang.Newsletter[3]}
               />
               <RhombusInput
                  addClass={styles.submitInput}
                  text={lang.Newsletter[4]}
               />
            </form>
         </div>
      </div>
   )
}

export default Newsletter
