import React, { useContext } from "react"
import styles from "./Footer.module.scss"
import { GeneralPL } from "../../content/GeneralPL"
import { GeneralEN } from "../../content/GeneralEN"
import { GeneralDE } from "../../content/GeneralDE"
import { GeneralFR } from "../../content/GeneralFR"
import Context from "../../context/context"
import { AiFillHome, AiFillFilePdf, AiFillPhone } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { GrYoutube } from "react-icons/gr"
import { FaFacebookSquare } from "react-icons/fa"
import { BsInfoCircleFill } from "react-icons/bs"
import H3 from "../UI/Headers/H3"
const Footer = () => {
   const { language } = useContext(Context)
   let lang, dtpInstruction, termsOfCooperation
   switch (language) {
      case "PL":
         lang = GeneralPL
         dtpInstruction = "http://printxl.pl/Instructions/Instructions_PL.pdf"
         termsOfCooperation =
            "http://printxl.pl/Instructions/termsOfCooperation_PL.pdf"
         break
      case "DE":
         lang = GeneralDE
         dtpInstruction = "http://printxl.pl/Instructions/Instructions_DE.pdf"
         termsOfCooperation =
            "http://printxl.pl/Instructions/termsOfCooperation_DE.pdf"
         break
      case "FR":
         lang = GeneralFR
         dtpInstruction = "http://printxl.pl/Instructions/Instructions_FR.pdf"
         termsOfCooperation =
            "http://printxl.pl/Instructions/termsOfCooperation_FR.pdf"
         break
      default:
         lang = GeneralEN
         dtpInstruction = "http://printxl.pl/Instructions/Instructions_EN.pdf"
         termsOfCooperation =
            "http://printxl.pl/Instructions/termsOfCooperation_EN.pdf"
   }

   return (
      <footer className={styles.Footer}>
         <div className={styles.container}>
            <div className={styles.box}>
               <H3 addClass={styles.heading}>{lang.FooterContent[0]}</H3>
               <div className={styles.boxItem}>
                  <a
                     href="https://goo.gl/maps/AcYmcUi4WEWm3GQb7"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.link}
                  >
                     <AiFillHome className={styles.icon} />
                     PrintXL Dystrybucja
                     <br />
                     Sp. z o.o.
                     <br />
                     ul. Czochralskiego 6,
                     <br />
                     61-248 Poznań, Polska
                  </a>
               </div>
            </div>

            <div className={styles.box}>
               <H3 addClass={styles.heading}>{lang.FooterContent[1]}</H3>
               <div className={styles.boxItem}>
                  <a className={styles.link} href="mailto:info@printxl.pl">
                     <IoMdMail className={styles.icon} />
                     info@printxl.pl
                  </a>

                  <a className={styles.link} href="tel:+48 695-859-808">
                     <AiFillPhone className={styles.icon} />
                     +48 695-859-808
                  </a>
               </div>
            </div>

            <div className={styles.box}>
               <H3 addClass={styles.heading}>{lang.FooterContent[2]}</H3>
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

            <div className={styles.box}>
               <H3 addClass={styles.heading}>{lang.FooterContent[3]}</H3>
               <div className={styles.boxItem}>
                  <a
                     className={styles.link}
                     href={termsOfCooperation}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <AiFillFilePdf className={styles.icon} />
                     {lang.FooterContent[4]}
                  </a>
                  <a
                     className={styles.link}
                     href={dtpInstruction}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <AiFillFilePdf className={styles.icon} />
                     {lang.FooterContent[5]}
                  </a>
               </div>
            </div>

            <div className={styles.box}>
               <H3 addClass={styles.heading}>{lang.FooterContent[9]}</H3>
               <div className={styles.boxItem}>
                  <div>
                     <BsInfoCircleFill className={styles.icon} />
                     <p>{lang.FooterContent[6]}: 0000427764</p>
                  </div>
                  <div>
                     <BsInfoCircleFill className={styles.icon} />
                     <p>{lang.FooterContent[7]}: 7780111456</p>
                  </div>
                  <div>
                     <BsInfoCircleFill className={styles.icon} />
                     <p>{lang.FooterContent[8]}: 632429082</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
export default Footer
