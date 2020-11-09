import React, { useContext } from "react"
import Context from "../../context/context"
import styles from "./AboutUs.module.scss"
import img_loopka from "../../assets/images/hero_img.jpg"
import Counter from "../Counter/Counter"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"
import Paragraph from "../UI/Paragraph/Paragraph"

const AboutUs = () => {
   const { textContent } = useContext(Context)
   return (
      <section className={styles.AboutUs}>
         <LeftBar text= {textContent.mainPage.aboutUs[0]} />
         <RightBar />
         <article className={styles.container}>
            <div className={styles.magnifier}>
               <img
                  className={styles.magnifierImage}
                  src={img_loopka}
                  alt="Magnifier"
               />
            </div>

            <div className={styles.descriptionContainer}>
               <Paragraph addClass={styles.innerDescription}>
                  {textContent.mainPage.aboutUs[1]}
                  <br />
                  <br />
                  {textContent.mainPage.aboutUs[2]}
                  <br />
                  <br />
                  {textContent.mainPage.aboutUs[3]}
                  <br />
                  <br />
               </Paragraph>
            </div>
         </article>
         <Counter />
      </section>
   )
}

export default AboutUs
