import React, { useEffect, useState, useContext } from "react"
import { Link } from "gatsby"
import styles from "./ContactBar.module.scss"
import { AiFillPhone } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { MdLocationOn } from "react-icons/md"
import Context from "../../../context/context"

const ContactBar = () => {
   const [pathname, setPathname] = useState("")

   const { textContent } = useContext(Context)

   useEffect(() => {
      if (window.location.pathname) {
         setPathname(window.location.pathname.substring(3))
      }
   }, [])

   return (
      <div className={styles.ContactBar}>
         <a
            href={`tel:${textContent.mainPage.contact.phone}`}
            className={styles.linkContainer}
         >
            <AiFillPhone className={styles.icon} />
            {textContent.mainPage.contact.phone}
         </a>

         <a className={styles.linkContainer} href="mailto:info@printxl.pl">
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
               to={`/EN${pathname}`}
               className={[styles.flagEN, styles.flag].join(" ")}
               partiallyActive
               activeClassName={styles.flag_Active}
            />
            <Link
               to={`/PL${pathname}`}
               className={[styles.flagPL, styles.flag].join(" ")}
               partiallyActive
               activeClassName={styles.flag_Active}
            />
            <Link
               to={`/DE${pathname}`}
               className={[styles.flagDE, styles.flag].join(" ")}
               partiallyActive
               activeClassName={styles.flag_Active}
            />
            <Link
               to={`/FR${pathname}`}
               className={[styles.flagFR, styles.flag].join(" ")}
               partiallyActive
               activeClassName={styles.flag_Active}
            />
         </div>
      </div>
   )
}

export default ContactBar
