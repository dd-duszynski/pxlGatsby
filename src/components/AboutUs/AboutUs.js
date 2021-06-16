import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Context from "../../context/context"
import styles from "./AboutUs.module.scss"
import Counter from "./Counter/Counter"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"
import Paragraph from "../UI/Paragraph/Paragraph"

const AboutUs = () => {
   const { textContent } = useContext(Context)
   const { contentfulAsset } = useStaticQuery(query)

   return (
      <section className={styles.AboutUs}>
         <LeftBar text={textContent.mainPage.aboutUs.header} />
         <RightBar />
         <article className={styles.container}>
            <div className={styles.magnifier}>
               <img
                  className={styles.magnifierImage}
                  alt="Magnifier"
                  src={contentfulAsset.fluid.src}
               />
            </div>

            <div className={styles.descriptionContainer}>
               <Paragraph addClass={styles.innerDescription}>
                  {textContent.mainPage.aboutUs.text[0]}
                  <br />
                  <br />
                  {textContent.mainPage.aboutUs.text[1]}
                  <br />
                  <br />
                  {textContent.mainPage.aboutUs.text[2]}
                  <br />
                  <br />
               </Paragraph>
            </div>
         </article>
         <Counter />
      </section>
   )
}

const query = graphql`
   {
      contentfulAsset(title: {eq: "hero img"}) {
         fluid {
            ...GatsbyContentfulFluid
         }
      }
   }
`

export default AboutUs
