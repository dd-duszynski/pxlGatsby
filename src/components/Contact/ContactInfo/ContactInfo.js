import React  from "react"
import styles from "./ContactInfo.module.scss"
import { AiFillHome, AiFillPhone } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { GrYoutube } from "react-icons/gr"
import { FaFacebookSquare } from "react-icons/fa"

const ContactInfo = ({text}) => {
   return (
      <section className={styles.ContactInfo}>
         <a
            className={styles.adres}
            href="https://goo.gl/maps/AcYmcUi4WEWm3GQb7"
            target="_blank"
            rel="noopener noreferrer"
         >
            <AiFillHome className={styles.icon} />
            PrintXL Sp. z o.o.
            <br />
            ul. Czochralskiego 6,
            <br />
            61-248 Poznań, {text[1]}
         </a>

         <div className={styles.line} />

         <a className={styles.mail} href="mailto:info@printxl.pl">
            <IoMdMail className={styles.icon} />
            info@printxl.pl
         </a>

         <div className={styles.line} />

         <a className={styles.phone} href="tel:+48 695-859-808">
            <AiFillPhone className={styles.icon} /> +48 695-859-808
         </a>

         <div className={styles.line} />

         <a
            className={styles.fb}
            href="https://www.facebook.com/printxl/"
            target="_blank"
            rel="noopener noreferrer"
         >
            <FaFacebookSquare className={styles.icon} /> Facebook
         </a>

         <div className={styles.line} />

         <a
            className={styles.yt}
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
