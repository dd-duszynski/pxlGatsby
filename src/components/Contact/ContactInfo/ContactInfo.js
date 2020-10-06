import React from "react"
import styles from "./ContactInfo.module.scss"

const ContactInfo = () => {
   return (
      <section className={styles.ContactInfo}>
         <a
            className={styles.adres}
            href="https://goo.gl/maps/AcYmcUi4WEWm3GQb7"
            target="_blank"
            rel="noopener noreferrer"
         >
            <span />
            PrintXL
            <br />
            ul. Czochralskiego 6,
            <br />
            61-248 Poznań, Polska
         </a>

         <div className={styles.line} />

         <a className={styles.mail} href="mailto:info@printxl.pl">
            <span /> info@printxl.pl
         </a>

         <div className={styles.line} />

         <a className={styles.phone} href="tel:+48 695-859-808">
            <span /> +48 695-859-808
         </a>

         <div className={styles.line} />

         <a
            className={styles.fb}
            href="https://www.facebook.com/printxl/"
            target="_blank"
            rel="noopener noreferrer"
         >
            <span /> Facebook
         </a>

         <div className={styles.line} />

         <a
            className={styles.yt}
            href="https://www.youtube.com/channel/UCDXDNkGSK8PZYBfDVa4VZwg"
            target="_blank"
            rel="noopener noreferrer"
         >
            <span /> YouTube
         </a>
      </section>
   )
}

export default ContactInfo
