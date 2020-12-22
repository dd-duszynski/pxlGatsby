import React, { useContext } from "react"
import Context from "../../context/context"
import styles from "./News.module.scss"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"
import Paragraph from "../UI/Paragraph/Paragraph"
import RhombusLink from "../UI/RhombusLink/RhombusLink"
import Carousel from "../Carousel/Carousel"
import covidImg from "../../assets/images/catalog_PL.jpg"
import christmasImg from "../../assets/images/catalogChristmas.jpg"

const Catalog = ({ img, t1, t2, link, btn }) => {
   return (
      <div className={styles.Catalog}>
         <div className={styles.imgBox}>
            <img src={img} className={styles.img} alt="" />
         </div>
         <div className={styles.descriptionBox}>
            <Paragraph>
               {t1}
               <br />
               <br />
               {t2}
            </Paragraph>
            <RhombusLink addClass={styles.CTAlink} externalLink link={link}>
               {btn}
            </RhombusLink>
         </div>
      </div>
   )
}

const News = () => {
   const { textContent } = useContext(Context)
   return (
      <div className={styles.News}>
         <LeftBar text={textContent.mainPage.news.header} />
         <RightBar />
         <div className={styles.container}>
            <Carousel>
               <Catalog
                  img={christmasImg}
                  t1={textContent.mainPage.news.christmasCatalog[0]}
                  t2={textContent.mainPage.news.christmasCatalog[1]}
                  link={textContent.mainPage.news.christmasCatalog[2]}
                  btn={textContent.mainPage.news.downloadBtn}
               />
               <Catalog
                  img={covidImg}
                  t1={textContent.mainPage.news.CovidCatalog[0]}
                  t2={textContent.mainPage.news.CovidCatalog[1]}
                  link={textContent.mainPage.news.CovidCatalog[2]}
                  btn={textContent.mainPage.news.downloadBtn}
               />
            </Carousel>
         </div>
      </div>
   )
}

export default News
