import React from "react"
import { Link } from "gatsby"
import styles from "./ContactBar.module.scss"
import {  AiFillPhone } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { MdLocationOn } from "react-icons/md"

const ContactBar = () => {
   return (
      <div className={styles.ContactBar}>
         <a 
            href="tel:+48 695-859-808" 
            className={styles.linkContainer}
         >
            <AiFillPhone className={styles.icon} />
            48 695-859-808
         </a>

         <a 
            href="mailto:info@printxl.pl" 
            className={styles.linkContainer}
         >
            <IoMdMail className={styles.icon} />
            info@printxl.pl
         </a>

         <a
            className={styles.linkContainer}
            href="https://goo.gl/maps/uPsmeVfGyKLyoCcy6"
            target="_blank"
            rel="noopener noreferrer"
         >
            <MdLocationOn className={styles.icon} />
            Poznań, Czochralskiego 6
         </a>

         <div className={styles.languagesContainer}>
            <Link
               to={`/EN`}
               className={[styles.flagEN, styles.flag].join(" ")}
               partiallyActive
               activeClassName={styles.flag_Active}
            />
            <Link
               to={`/PL`}
               className={[styles.flagPL, styles.flag].join(" ")}
               partiallyActive
               activeClassName={styles.flag_Active}
            />
            <Link
               to={`/DE`}
               className={[styles.flagDE, styles.flag].join(" ")}
               partiallyActive
               activeClassName={styles.flag_Active}
            />
            <Link
               to={`/FR`}
               className={[styles.flagFR, styles.flag].join(" ")}
               partiallyActive
               activeClassName={styles.flag_Active}
            />
         </div>
      </div>
   )
}

export default ContactBar
