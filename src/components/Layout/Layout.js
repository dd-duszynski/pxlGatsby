import React from "react"
import "../../scss/main.scss"
import Footer from "../Footer/Footer"
import Navigation from "../Navigation/Navigation"
import ReturnToTopArrow from "./ReturnToTopArrow/ReturnToTopArrow"
import styles from "./Layout.module.scss"
import Helmet from "react-helmet"
import favicon from "../../../static/favicon.png"
import LanguageContext from "../../context/context"
import { contentPL } from "../../content/contentPL"
import { contentEN } from "../../content/contentEN"
import { contentDE } from "../../content/contentDE"
import { contentFR } from "../../content/contentFR"

const Layout = ({ children, language }) => {
   let textContent
   switch (language) {
      case "PL":
         textContent = contentPL
         break
      case "EN":
         textContent = contentEN
         break
      case "DE":
         textContent = contentDE
         break
      case "FR":
         textContent = contentFR
         break
      default:
         textContent = contentEN
   }

   return (
      <LanguageContext.Provider
         value={{
            language: language,
            textContent: textContent
         }}
      >
         <main className={styles.Layout}>
            <Helmet>
               <link rel="icon" href={favicon} />
            </Helmet>
            <Navigation/>
            {children}
            <Footer/>
            <ReturnToTopArrow />
         </main>
      </LanguageContext.Provider>
   )
}

export default Layout
