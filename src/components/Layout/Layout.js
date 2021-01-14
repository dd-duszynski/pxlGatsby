import React, {useState} from "react"
import Helmet from "react-helmet"
import "../../scss/main.scss"
import styles from "./Layout.module.scss"
import Context from "../../context/context"
import Footer from "../Footer/Footer"
import Modal from "../Modal/Modal"
import Navigation from "../Navigation/Navigation"
import ReturnToTopArrow from "./ReturnToTopArrow/ReturnToTopArrow"
import favicon from "../../../static/favicon.png"
import { contentPL } from "../../content/contentPL"
import { contentEN } from "../../content/contentEN"
import { contentDE } from "../../content/contentDE"
import { contentFR } from "../../content/contentFR"

const Layout = ({ children, language }) => {
   const [isModalOpen, setModalOpen] = useState(false) 
   const switchModalVisibility = () => {
      isModalOpen === false ? setModalOpen(true) : setModalOpen(false)
   }
   let textContent
   switch (language) {
      case "PL":
         textContent = contentPL
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
      <Context.Provider
         value={{
            language: language,
            textContent: textContent,
            isModalOpen: isModalOpen,
            switchModalVisibility: switchModalVisibility
         }}
      >
         <div className={styles.Layout}>
            <Helmet>
               <link rel="icon" href={favicon} />
            </Helmet>
            <Navigation />
            {children}
            <Footer />
            <ReturnToTopArrow />
            <Modal />
         </div>
      </Context.Provider>
   )
}

export default Layout
