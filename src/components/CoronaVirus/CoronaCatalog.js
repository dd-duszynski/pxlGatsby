import React, { Component } from "react"
import styles from "./CoronaCatalog.module.scss"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"
import img_loopka from "../../assets/images/catalog_PL.jpg"

export default class CoronaCatalog extends Component {
   state = {
      isSmallDevice: false,
   }
   updateDimensions = () => {
      if (window.innerWidth <= 1000) {
         this.setState({
            isSmallDevice: true,
         })
      } else {
         this.setState({
            isSmallDevice: false,
         })
      }
   }
   componentDidMount() {
      this.updateDimensions()
      window.addEventListener("resize", this.updateDimensions)
   }

   componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions)
   }
   render() {
      const link = "http://printxl.pl/pdf/COVID_PL_m.pdf"

      return (
         <section className={styles.CoronaCatalog}>
            <LeftBar text="Aktualności" />
            <RightBar />
            <article className={styles.container}>
               <div className={styles.imageContainer}>
                  <img src={img_loopka} className={styles.image} alt="The man in the mask" />
               </div>

               <div className={styles.description_container}>
                  <p className={styles.innerDescription}>
                     Zachęcamy do pobrania naszego nowego katalogu.
                     <br />
                     <br />
                     Znajdą w nim Państwo aktualną ofertę na produkty ochronne
                     oraz przydatne akcesoria.
                  </p>
                  <div className={styles.CTAbutton}>
                     <a
                        className={styles.CTAlink}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <p className={styles.CTAtext}>
                           {`>> Pobierz katalog <<`}
                        </p>
                     </a>
                  </div>
               </div>
            </article>
         </section>
      )
   }
}
