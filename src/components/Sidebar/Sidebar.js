import React, { useState, useEffect } from "react"
import styles from "./Sidebar.module.scss"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { IoMdMail } from "react-icons/io"
import { GiPresent } from "react-icons/gi"
import { AiFillPhone } from "react-icons/ai"

const Sidebar = () => {
   const [isFloatingMenuOpen, setFloatingMenuOpen] = useState(false)

   const switchFloatingMenu = isFmOpen => {
      localStorage.setItem("isFmOpen", !isFmOpen)
      setFloatingMenuOpen(!isFmOpen)
   }

   const sidebarCSS = isFloatingMenuOpen ? styles.open : styles.closed
   return (
      <div className={[styles.Sidebar, sidebarCSS].join(" ")}>
         <div
            className={[styles.iconBox, styles.arrowBox].join(" ")}
            onClick={() => switchFloatingMenu(isFloatingMenuOpen)}
         >
            {isFloatingMenuOpen ? <RiArrowRightSLine /> : <RiArrowLeftSLine />}
         </div>

         <div className={styles.line} />

         <div className={styles.iconBox}>
            <IoMdMail />
            {isFloatingMenuOpen && (
               <span className={styles.title}>Napisz do Nas</span>
            )}
         </div>

         <div className={styles.line} />

         <div className={styles.iconBox}>
            <AiFillPhone />
            {isFloatingMenuOpen && (
               <span className={styles.title}>Zadzwoń</span>
            )}
         </div>

         <div className={styles.line} />

         <div className={styles.iconBox}>
            <GiPresent />
            {isFloatingMenuOpen && (
               <span className={styles.title}>Zamów Próbki</span>
            )}
         </div>
      </div>
   )
}

export default Sidebar
