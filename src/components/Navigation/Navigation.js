import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import ContactBar from "./ContactBar/ContactBar"
import ContactBarMobile from "./ContactBarMobile/ContactBarMobile"
import Context from "../../context/context"
import styles from "./Navigation.module.scss"
import Burger from "../UI/BurgerButton/BurgerButton"
import Logo from "../UI/Logo/Logo"

const Navigation = () => {
   const [isBurgerOpen, setHamburgerOpen] = useState(false)
   const { textContent } = useContext(Context)

   const toggleNavSlide = () => {
      setHamburgerOpen(!isBurgerOpen)
   }

   const hideNavSlide = () => {
      setHamburgerOpen(false)
   }
   const cssHeader = isBurgerOpen ? styles.NavigationOpened : styles.Navigation
   
   return (
      <header className={cssHeader}>
         <ContactBar />
         <div className={styles.container}>
            <Logo link={`/${textContent.navigation.mainPageLink}`} />
            <Burger isActive={isBurgerOpen} toggleNavSlide={toggleNavSlide} />
            <nav className={isBurgerOpen ? styles.navActive : styles.navInactive}>
               <ul className={styles.listOfNavItems}>
                  {textContent.navigation.navItem.map(item => (
                     <li className={styles.navItem}>
                        <Link
                           onClick={e => hideNavSlide(e)}
                           activeClassName={styles.active}
                           partiallyActive
                           className={styles.link}
                           to={`/${item[1]}`}
                        >
                           {item[0]}
                        </Link>
                     </li>
                  ))}
                  <ContactBarMobile />
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default Navigation
