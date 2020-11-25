import React, { useState, useEffect, useContext } from "react"
import Context from "../../context/context"
import styles from "./News.module.scss"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"
import Carousel from "../Carousel/Carousel"
import covidImg from "../../assets/images/catalog_PL.jpg"
import christmasImg from "../../assets/images/catalogChristmas.jpg"

const CoronaCatalog = () => {
   const [isSmallDevice, setIsSmallDevice] = useState(false)
   const { textContent } = useContext(Context)

   const updateDimensions = () => {
      if (window.innerWidth <= 1000) {
         setIsSmallDevice(true)
      } else {
         setIsSmallDevice(false)
      }
   }

   useEffect(() => {
      updateDimensions()
      window.addEventListener("resize", updateDimensions)
      return function cleanup() {
         window.removeEventListener("resize", updateDimensions)
      }
   })

   let link, christmasLink
   link = "http://printxl.pl/pdf/COVID_PL_m.pdf"
   christmasLink = "http://printxl.pl/pdf/christmas_PL.pdf"

   const covidCatalog = (
      <div className={styles.container}>
         <div className={styles.imgContainer}>
            <img src={covidImg} className={styles.img} alt="" />
         </div>
         <div className={styles.descriptionContainer}>
            <p className={styles.innerDescription}>
               Zachęcamy do pobrania naszego nowego katalogu.
               <br />
               <br />
               Znajdą w nim Państwo aktualną ofertę na produkty i przydatne
               akcesoria pomagające w walce z Covid-19.
            </p>
            <div className={styles.seeAllButton}>
               <a
                  className={styles.link}
                  exact
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
               >
                  {textContent.mainPage.news.downloadBtn}
               </a>
            </div>
         </div>
      </div>
   )

   const christmasCatalog = (
      <div className={styles.container}>
         <div className={styles.imgContainer}>
            <img src={christmasImg} className={styles.img} alt="" />
         </div>
         <div className={styles.descriptionContainer}>
            <p className={styles.innerDescription}>
               Ok1
               <br />
               <br />
               Ok2
            </p>
            <div className={styles.seeAllButton}>
               <a
                  className={styles.link}
                  exact
                  target="_blank"
                  rel="noopener noreferrer"
                  href={christmasLink}
               >
                  {textContent.mainPage.news.downloadBtn}
               </a>
            </div>
         </div>
      </div>
   )
   return (
      <div className={styles.News}>
         <LeftBar text={textContent.mainPage.news.header} />
         <RightBar />
         <Carousel>
            {christmasCatalog}
            {covidCatalog}
         </Carousel>
      </div>
   )
}

export default CoronaCatalog
