import React, { useContext } from "react"
import Context from "../../context/context"
import styles from "./News.module.scss"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"
import Paragraph from "../UI/Paragraph/Paragraph"
import RhombusBtn from "../UI/RhombusBtn/RhombusBtn"
import covidImg from "../../assets/images/catalog_PL.jpg"

const Catalog = ({ img, t1, t2, link, btn }) => {
   return (
      <div className={styles.Catalog}>
         <div className={styles.imgBox}>
            <img src={img} className={styles.img} alt="" />
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
      <div className={styles.News}>
         <LeftBar text={textContent.mainPage.news.header} />
         <RightBar />
         <div className={styles.container}>
            <Catalog
               img={covidImg}
               t1={textContent.mainPage.news.CovidCatalog[0]}
               t2={textContent.mainPage.news.CovidCatalog[1]}
               link={textContent.mainPage.news.CovidCatalog[2]}
               btn={textContent.mainPage.news.downloadBtn}
            />
         </div>
      </div>
   )
}

export default News
