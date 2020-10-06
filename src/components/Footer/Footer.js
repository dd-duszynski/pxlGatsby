import React, { useContext } from "react"
import styles from "./Footer.module.scss"
import { GeneralPL } from "../../content/GeneralPL"
import { GeneralEN } from "../../content/GeneralEN"
import { GeneralDE } from "../../content/GeneralDE"
import { GeneralFR } from "../../content/GeneralFR"
import Context from "../../context/context"

const Footer = () => {
   const { language } = useContext(Context);
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
               <h3 className={styles.heading}>
                  {lang.FooterContent[0]}
               </h3>
               <div className={styles.boxItem} >
                  <a
                     href="https://goo.gl/maps/AcYmcUi4WEWm3GQb7"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.link}
                  >
                     <span className={styles.homeIcon} />
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
               <h3 className={styles.heading}>
                  {lang.FooterContent[1]}
               </h3>
               <div className={styles.boxItem} >
                  <a
                     className={styles.link}
                     href="mailto:info@printxl.pl"
                  >
                     <span className={styles.mail} />
                        info@printxl.pl
                     </a>

                  <a
                     className={styles.link}
                     href="tel:+48 695-859-808"
                  >
                     <span className={styles.phone} />
                        +48 695-859-808
                     </a>
               </div>
            </div>

            <div className={styles.box}>
               <h3 className={styles.heading}>
                  {lang.FooterContent[2]}
               </h3>
               <div className={styles.boxItem} >
                  <a
                     className={styles.link}
                     href="https://www.facebook.com/printxl/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <span className={styles.fb} />
                        Facebook
                     </a>
                  <a
                     className={styles.link}
                     href="https://www.youtube.com/channel/UCDXDNkGSK8PZYBfDVa4VZwg"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <span className={styles.yt} />
                        YouTube
                     </a>
               </div>
            </div>

            <div className={styles.box}>
               <h3 className={styles.heading}>
                  {lang.FooterContent[3]}
               </h3>
               <div className={styles.boxItem} >
                  <a
                     className={styles.link}
                     href={termsOfCooperation}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <span className={styles.pdf} />
                     {lang.FooterContent[4]}
                  </a>
                  <a
                     className={styles.link}
                     href={dtpInstruction}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <span className={styles.pen} />
                     {lang.FooterContent[5]}
                  </a>
               </div>
            </div>

            <div className={styles.box}>
               <h3 className={styles.heading}>
                  {lang.FooterContent[9]}
               </h3>
               <div className={styles.boxItem} >
                  <div>
                     <span className={styles.info} />
                     <p>{lang.FooterContent[6]}: 0000427764</p>
                  </div>
                  <div>
                     <span className={styles.info} />
                     <p>{lang.FooterContent[7]}: 7780111456</p>
                  </div>
                  <div>
                     <span className={styles.info} />
                     <p>{lang.FooterContent[8]}: 632429082</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
export default Footer
