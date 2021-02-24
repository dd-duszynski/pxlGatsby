import React, { useContext } from "react"
import Context from "../../context/context"
import styles from "./Footer.module.scss"
import { AiFillHome, AiFillFilePdf, AiFillPhone } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { GrYoutube } from "react-icons/gr"
import { FaFacebookSquare } from "react-icons/fa"
import { BsInfoCircleFill } from "react-icons/bs"
import H3 from "../UI/Headers/H3"

const Footer = () => {
   const { textContent } = useContext(Context)
   return (
      <footer className={styles.Footer}>
         <div className={styles.container}>
            <div className={styles.box}>
               <H3 addClass={styles.heading}>{textContent.footer.text[0]}</H3>
               <div className={styles.boxItem}>
                  <a
                     href="https://goo.gl/maps/uPsmeVfGyKLyoCcy6"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.link}
                  >
                     <AiFillHome className={styles.icon} />
                     PrintXL Sp. z o.o.
                     <br />
                     ul. Czochralskiego 6,
                     <br />
                     61-248 Poznań, {textContent.footer.text[1]}
                  </a>
               </div>
            </div>

            <div className={styles.box}>
               <H3 addClass={styles.heading}>{textContent.footer.text[2]}</H3>
               <div className={styles.boxItem}>
                  <a className={styles.link} href="mailto:info@printxl.pl">
                     <IoMdMail className={styles.icon} />
                     info@printxl.pl
                  </a>

                  <a className={styles.link} href="tel:+48 695-859-808">
                     <AiFillPhone className={styles.icon} />
                     {textContent.mainPage.contact.phone}
                  </a>
               </div>
            </div>

            <div className={styles.box}>
               <H3 addClass={styles.heading}>{textContent.footer.text[3]}</H3>
               <div className={styles.boxItem}>
                  <a
                     className={styles.link}
                     href="https://www.facebook.com/printxl/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FaFacebookSquare className={styles.icon} />
                     Facebook
                  </a>
                  <a
                     className={styles.link}
                     href="https://www.youtube.com/channel/UCDXDNkGSK8PZYBfDVa4VZwg"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <GrYoutube className={styles.icon} />
                     YouTube
                  </a>
               </div>
            </div>

            {/* <div className={styles.box}>
               <H3 addClass={styles.heading}>{textContent.footer.text[4]}</H3>
               <div className={styles.boxItem}>
                  <a
                     className={styles.link}
                     href={textContent.footer.links[0]}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <AiFillFilePdf className={styles.icon} />
                     {textContent.footer.text[5]}
                  </a>
                  <a
                     className={styles.link}
                     href={textContent.footer.links[1]}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <AiFillFilePdf className={styles.icon} />
                     {textContent.footer.text[6]}
                  </a>
               </div>
            </div> */}

            <div className={styles.box}>
               <H3 addClass={styles.heading}>{textContent.footer.text[7]}</H3>
               <div className={styles.boxItem}>
                  <div className={styles.innerContainer}>
                     <BsInfoCircleFill className={styles.icon} />
                     <p>{textContent.footer.text[8]}: 0000427764</p>
                  </div>
                  <div className={styles.innerContainer}>
                     <BsInfoCircleFill className={styles.icon} />
                     <p>{textContent.footer.text[9]}: 7780111456</p>
                  </div>
                  <div className={styles.innerContainer}>
                     <BsInfoCircleFill className={styles.icon} />
                     <p>{textContent.footer.text[10]}: 632429082</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
export default Footer
