import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Context from "../../context/context"
import styles from "./News.module.scss"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"
import Paragraph from "../UI/Paragraph/Paragraph"
import RhombusBtn from "../UI/RhombusBtn/RhombusBtn"

const Catalog = ({ t1, t2, link, btn }) => {
   const { contentfulAsset } = useStaticQuery(query)
   return (
      <div className={styles.Catalog}>
         <div className={styles.imgBox}>
            <img
               src={contentfulAsset.fluid.src}
               className={styles.img}
               alt="corona virus catalog cover"
            />
         </div>
         <div className={styles.descriptionBox}>
            <Paragraph fontSize="16px">
               {t1}
               <br />
               <br />
               {t2}
            </Paragraph>
            <RhombusBtn addClass={styles.CTAlink} type="extLink" link={link}>
               {btn}
            </RhombusBtn>
         </div>
      </div>
   )
}

const News = () => {
   const { textContent } = useContext(Context)
   return (
      <section className={styles.News}>
         <LeftBar text={textContent.mainPage.news.header} />
         <RightBar />
         <div className={styles.container}>
            <Catalog
               t1={textContent.mainPage.news.CovidCatalog[0]}
               t2={textContent.mainPage.news.CovidCatalog[1]}
               link={textContent.mainPage.news.CovidCatalog[2]}
               btn={textContent.mainPage.news.downloadBtn}
            />
         </div>
      </section>
   )
}

const query = graphql`
   {
      
      contentfulAsset(title: {eq: "covid_catalog "}) {
         fluid {
            ...GatsbyContentfulFluid
         }
      }
   }
`

export default News
