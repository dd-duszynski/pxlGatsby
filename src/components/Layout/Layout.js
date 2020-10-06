import React from "react"
import "../../scss/main.scss"
import Footer from "../Footer/Footer"
import Navigation from "../Navigation/Navigation"
import ReturnToTopArrow from "./ReturnToTopArrow/ReturnToTopArrow"
import styles from "./Layout.module.scss"
import Helmet from "react-helmet"
import favicon from "../../../static/favicon.png"
import LanguageContext from "../../context/context"

const Layout = ({ children, language }) => {
   return (
      <LanguageContext.Provider
         value={{
            language: language,
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
