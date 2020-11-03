import React from "react"
import styles from "./Newsletter.module.scss"
import { GeneralPL } from "../../../content/GeneralPL"
import Paragraph from "../../UI/Paragraph/Paragraph"
import RhombusInput from "../../UI/RhombusInput/RhombusInput"

const Newsletter = () => {
   let lang = GeneralPL

   return (
      <div className={styles.Newsletter}>
         <div className={styles.container}>
            <Paragraph addClass={styles.paragraph}>
               {lang.Newsletter[0]}
               <br />
               {lang.Newsletter[1]}
               <br />
            </Paragraph>

            <form className={styles.form}>
               <div className={styles.inputsContainer}>
                  <span className={styles.userIcon} />
                  <input
                     className={styles.input}
                     type="text"
                     name="firstName"
                     placeholder={lang.Newsletter[2]}
                  />
               </div>
               <div className={styles.inputsContainer}>
                  <span className={styles.emailIcon} />
                  <input
                     className={styles.input}
                     type="email"
                     name="email"
                     placeholder={lang.Newsletter[3]}
                  />
               </div>
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
