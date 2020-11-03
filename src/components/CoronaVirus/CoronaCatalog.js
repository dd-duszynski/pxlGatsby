import React, { Component } from "react"
import styles from "./CoronaCatalog.module.scss"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"
import img_loopka from "../../assets/images/catalog_PL.jpg"
import Paragraph from "../UI/Paragraph/Paragraph"
import RhombusLink from "../UI/RhombusLink/RhombusLink"
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
                  <img
                     src={img_loopka}
                     className={styles.image}
                     alt="The man in the mask"
                  />
               </div>

               <div className={styles.description_container}>
                  <Paragraph addClass={styles.innerDescription}>
                     Zachęcamy do pobrania naszego nowego katalogu.
                     <br />
                     <br />
                     Znajdą w nim Państwo aktualną ofertę na produkty i
                     przydatne akcesoria pomagające w walce z Covid-19.
                  </Paragraph>
                  <RhombusLink
                     addClass={styles.CTAlink}
                     link
                     externalLink
                     link={link}
                  >
                     {`>> Pobierz katalog <<`}
                  </RhombusLink>
               </div>
            </article>
         </section>
      )
   }
}
