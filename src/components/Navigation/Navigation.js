import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import TopBar from "./TopBar/TopBar"
import TopBarMobile from "./TopBarMobile/TopBarMobile"
import logoWhite from "../../assets/icons/logo_white.svg"
import Context from "../../context/context"
import styles from "./Navigation.module.scss"

const Navigation = () => {
   const [classNav, setClassNav] = useState(styles.Nav)
   const { textContent } = useContext(Context)

   const toggleNavSlide = () => {
      let css = classNav === styles.Nav ? styles.Nav__active : styles.Nav
      setClassNav(css)
   }

   const hideNavSlide = () => {
      setClassNav(styles.Nav)
   }

   return (
      <header
         className={
            classNav === styles.Nav__active
               ? styles.NavigationFixed
               : styles.Navigation
         }
      >
         <TopBar />
         <div className={styles.Container}>
            <h1>
               <Link to={`/${textContent.navigation.links[0]}`}>
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
                        to={`/${textContent.navigation.links[1]}`}
                     >
                        {textContent.navigation.text[0]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${textContent.navigation.links[2]}`}
                     >
                        {textContent.navigation.text[1]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${textContent.navigation.links[3]}`}
                     >
                        {textContent.navigation.text[2]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${textContent.navigation.links[4]}`}
                     >
                        {textContent.navigation.text[3]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        to={`/${textContent.navigation.links[5]}`}
                     >
                        {textContent.navigation.text[4]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${textContent.navigation.links[6]}`}
                     >
                        {textContent.navigation.text[5]}
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={e => hideNavSlide(e)}
                        activeClassName={styles.active}
                        partiallyActive
                        to={`/${textContent.navigation.links[7]}`}
                     >
                        {textContent.navigation.text[6]}
                     </Link>
                  </li>
                  <TopBarMobile hideNavSlide={() => hideNavSlide()} />
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default Navigation
