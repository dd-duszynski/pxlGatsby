import React from "react"
import { Link } from "gatsby"
import styles from "./ContactBarMobile.module.scss"
import { AiFillPhone } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { MdLocationOn } from "react-icons/md"

const ContactBarMobile = () => {
   let path = window.location.pathname.slice(3)

   return (
      <>
         <li className={styles.ContactBarMobile}>
            <div className={styles.line} />
            <div className={styles.iconsContainer}>
               <a href="tel:+48 695-859-808">
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
                  to={`/EN/${path}`}
                  className={[styles.flagEN, styles.flag].join(' ')}
                  activeClassName={styles.flagActive}
               />
               <Link
                  to={`/PL/${path}`}
                  className={[styles.flagPL, styles.flag].join(' ')}
                  activeClassName={styles.flagActive}
               />
               <Link
                  to={`/DE/${path}`}
                  className={[styles.flagDE, styles.flag].join(' ')}
                  activeClassName={styles.flagActive}
               />
               <Link
                  to={`/FR/${path}`}
                  className={[styles.flagFR, styles.flag].join(' ')}
                  activeClassName={styles.flagActive}
               />
            </div>
         </li>
      </>
   )
}

export default ContactBarMobile
