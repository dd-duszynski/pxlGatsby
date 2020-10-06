import React, { useState, useContext } from "react"
// import { useLanguage } from '../../hooks/language-hook'
import { Link } from "gatsby"
import TopBar from "./TopBar/TopBar"
import TopBarMobile from "./TopBarMobile/TopBarMobile"
import logoWhite from "../../assets/icons/logo_white.svg"
import { contentPL } from "../../content/contentPL"
import { GeneralEN } from "../../content/GeneralEN"
import { GeneralDE } from "../../content/GeneralDE"
import { GeneralFR } from "../../content/GeneralFR"
import Context from "../../context/context"
import styles from "./Navigation.module.scss"

const Navigation = ({ languageChange }) => {
   const [classNav, setClassNav] = useState(styles.Nav)
   const { language } = useContext(Context)
   // muszę potestować
   // const test = useLanguage(language)

   const toggleNavSlide = () => {
      let css = classNav === styles.Nav ? styles.Nav__active : styles.Nav
      setClassNav(css)
   }

   const hideNavSlide = () => {
      setClassNav(styles.Nav)
   }

   let lang
   if (language === "PL") {
      lang = contentPL
   } else if (language === "EN") {
      lang = GeneralEN
   } else if (language === "DE") {
      lang = GeneralDE
   } else if (language === "FR") {
      lang = GeneralFR
   }

   return (
      <header
         className={
            classNav === styles.Nav__active
               ? styles.NavigationFixed
               : styles.Navigation
         }
      >
         <TopBar languageChange={e => languageChange(e)} />
         <div className={styles.Container}>
            <h1>
               <Link to={`/${lang.navigationLinks[0]}`}>
                  <img
                     className={styles.logo}
                     src={logoWhite}
                     alt="PrintXL Logo"
                  />
               </Link>
            </h1>
            <div
               className={
                  classNav === styles.Nav ? styles.burger : styles.burger_active
               }
               onClick={e => toggleNavSlide(e)}
            >
               <div className={styles.line1}></div>
               <div className={styles.line2}></div>
               <div className={styles.line3}></div>
            </div>
            <nav className={classNav}>
               <ul>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${lang.navigationLinks[1]}`}
                     >
                        {lang.navigationText[0]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${lang.navigationLinks[2]}`}
                     >
                        {lang.navigationText[1]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${lang.navigationLinks[3]}`}
                     >
                        {lang.navigationText[2]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${lang.navigationLinks[4]}`}
                     >
                        {lang.navigationText[3]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        to={`/${lang.navigationLinks[5]}`}
                     >
                        {lang.navigationText[4]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${lang.navigationLinks[6]}`}
                     >
                        {lang.navigationText[5]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${lang.navigationLinks[7]}`}
                     >
                        {lang.navigationText[6]}
                     </Link>
                  </li>
                  <TopBarMobile
                     languageChange={e => languageChange(e)}
                     hideNavSlide={() => hideNavSlide()}
                  />
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default Navigation
