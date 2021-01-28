import React from "react"
import styles from "./ContactInfo.module.scss"
import { AiFillHome, AiFillPhone } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { GrYoutube } from "react-icons/gr"
import { FaFacebookSquare } from "react-icons/fa"

const ContactInfo = ({ text }) => {
   return (
      <section className={styles.ContactInfo}>
         <a
            className={styles.linkItem}
            href="https://goo.gl/maps/uPsmeVfGyKLyoCcy6"
            target="_blank"
            rel="noopener noreferrer"
         >
            <AiFillHome className={styles.icon} />
            PrintXL Sp. z o.o.
            <br />
            ul. Czochralskiego 6,
            <br />
            61-248 Poznań, {text[0]}
         </a>

         <a className={styles.linkItem} href="mailto:info@printxl.pl">
            <IoMdMail className={styles.icon} />
            info@printxl.pl
         </a>

         <a className={styles.linkItem} href="tel:+48 695-859-808">
            <AiFillPhone className={styles.icon} /> +48 695-859-808
         </a>

         <a
            className={styles.linkItem}
            href="https://www.facebook.com/printxl/"
            target="_blank"
            rel="noopener noreferrer"
         >
            <FaFacebookSquare className={styles.icon} /> Facebook
         </a>

         <a
            className={styles.linkItem}
            href="https://www.youtube.com/channel/UCDXDNkGSK8PZYBfDVa4VZwg"
            target="_blank"
            rel="noopener noreferrer"
         >
            <GrYoutube className={styles.icon} /> YouTube
         </a>
      </section>
   )
}

export default ContactInfo
