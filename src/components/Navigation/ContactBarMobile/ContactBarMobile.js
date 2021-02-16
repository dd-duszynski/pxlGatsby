import React, { useEffect, useState, useContext } from "react"
import { Link } from "gatsby"
import Context from "../../../context/context"
import styles from "./ContactBarMobile.module.scss"
import { AiFillPhone } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { MdLocationOn } from "react-icons/md"

const ContactBarMobile = () => {
   const [pathname, setPathname] = useState("")
   const { textContent } = useContext(Context)
   useEffect(() => {
      if (window.location.pathname) {
         setPathname(window.location.pathname.substring(3))
      }
   }, [])
   return (
      <>
         <li className={styles.ContactBarMobile}>
            <div className={styles.line} />
            <div className={styles.iconsContainer}>
               <a href={`tel:${textContent.mainPage.contact.phone}`}>
                  <AiFillPhone className={styles.icon} />
               </a>
               <a href="mailto:info@printxl.pl">
                  <IoMdMail className={styles.icon} />
               </a>
               <a
                  href="https://goo.gl/maps/uPsmeVfGyKLyoCcy6"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <MdLocationOn className={styles.icon} />
               </a>
            </div>
         </li>
         <li className={styles.ContactBarMobile}>
            <div className={styles.languagesContainer}>
               <Link
                  to={`/EN${pathname}`}
                  className={[styles.flagEN, styles.flag].join(" ")}
                  activeClassName={styles.flagActive}
               />
               <Link
                  to={`/PL${pathname}`}
                  className={[styles.flagPL, styles.flag].join(" ")}
                  activeClassName={styles.flagActive}
               />
               <Link
                  to={`/DE${pathname}`}
                  className={[styles.flagDE, styles.flag].join(" ")}
                  activeClassName={styles.flagActive}
               />
               <Link
                  to={`/FR${pathname}`}
                  className={[styles.flagFR, styles.flag].join(" ")}
                  activeClassName={styles.flagActive}
               />
            </div>
         </li>
      </>
   )
}

export default ContactBarMobile
