import React, { useContext } from "react"
// import Image from "gatsby-image"
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
      <div className={styles.innerContainer}>
         <div className={styles.imgContainer}>
            <img src={img} className={styles.img} alt="" />
            {/* 
               Dopiero jak bede pobierał z graphQL
               <Image fluid={img} className={styles.img} /> 
            */}
         </div>
         <div className={styles.descriptionContainer}>
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
                  t1={"Katalog ze świątecznymi produktami już dostępny!"}
                  t2={
                     "Zachęcamy do zapoznania się z systemami, w których łatwo wymienisz grafikę po okresie świątecznym."
                  }
                  link={"http://printxl.pl/pdf/christmas_PL.pdf"}
                  btn={textContent.mainPage.news.downloadBtn}
               />
               <Catalog
                  img={covidImg}
                  t1={"Zachęcamy do pobrania naszego nowego katalogu."}
                  t2={
                     "Znajdą w nim Państwo aktualną ofertę na produkty ochronne oraz przydatne akcesoria."
                  }
                  link={"http://printxl.pl/pdf/COVID_PL_m.pdf"}
                  btn={textContent.mainPage.news.downloadBtn}
               />
            </Carousel>
         </div>
      </div>
   )
}

export default News
