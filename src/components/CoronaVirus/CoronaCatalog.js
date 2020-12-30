import React, { useState, useEffect, useContext } from "react"
import Context from "../../context/context"
import styles from "./CoronaCatalog.module.scss"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"
import img_loopka from "../../assets/images/catalog_PL.jpg"
import Paragraph from "../UI/Paragraph/Paragraph"
import RhombusBtn from "../UI/RhombusBtn/RhombusBtn"

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
      return () => {
         window.removeEventListener("resize", updateDimensions)
      }
   }, [])
   
   const linkToCatalog = isSmallDevice
      ? textContent.mainPage.news[5]
      : textContent.mainPage.news[4]

   return (
      <section className={styles.CoronaCatalog}>
         <LeftBar text={textContent.mainPage.news[0]} />
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
                  {textContent.mainPage.news[1]}
                  <br />
                  <br />
                  {textContent.mainPage.news[2]}
               </Paragraph>
               <RhombusBtn
                  addClass={styles.CTAlink}
                  type='extLink'
                  link={linkToCatalog}
               >
                  {textContent.mainPage.news[3]}
               </RhombusBtn>
            </div>
         </article>
      </section>
   )
}

export default CoronaCatalog
