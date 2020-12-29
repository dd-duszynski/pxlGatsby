import React, { useContext } from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GiRolledCloth } from "react-icons/gi"
import { AiOutlineCheck } from "react-icons/ai"
import Context from "../../context/context"
import Carousel from "../Carousel/Carousel"
import Paragraph from "../UI/Paragraph/Paragraph"
import H1 from "../UI/Headers/H1"
import H2 from "../UI/Headers/H2"
import RhombusLink from "../UI/RhombusLink/RhombusLink"
import BreadcrumbsContainer from "./BreadcrumbsContainer/BreadcrumbsContainer"
import Specifications from "./Specifications/Specifications"
import styles from "./ProductPage.module.scss"
import { RICHTEXT_OPTIONS } from "../UI/RichText/RichText"
import TagsContainer from "./TagsContainer/TagsContainer"

const BtnContainer = ({ text }) => {
   return (
      <div className={styles.btnContainer}>
         <RhombusLink addClass={styles.btn}>{text}</RhombusLink>
      </div>
   )
}

const ProductPage = ({ data }) => {
   const { textContent } = useContext(Context)
   const {
      nazwa,
      zdjecia,
      opis,
      zalety,
      polecaneMateriay,
      specyfikacje,
      rodzaj,
      url,
      wymiary,
      zadruk,
      opcjeProduktu,
   } = data.contentfulProduktyPl

   const [...images] = zdjecia

   return (
      <main className={styles.ProductPage}>
         <div className={styles.leftSection}>
            <BreadcrumbsContainer
               nazwa={nazwa}
               rodzaj={rodzaj}
               text={textContent.productPage}
               url={url}
            />
            <TagsContainer zadruk={zadruk} opcjeProduktu={opcjeProduktu} />

            <Carousel>
               {images.map((item, index) => (
                  <div className={styles.imgContainer} key={index}>
                     <img
                        className={styles.img}
                        src={item.fluid.src}
                        alt={nazwa}
                     />
                  </div>
               ))}
            </Carousel>

            <BtnContainer text={textContent.productPage.text[0]} />
         </div>

         <div className={styles.rightSection}>
            <H1 addClass={styles.header}>{nazwa}</H1>
            {documentToReactComponents(opis.json, RICHTEXT_OPTIONS)}
            <H2 addClass={styles.header}>{textContent.productPage.text[1]}</H2>
            {zalety.map(item => (
               <div className={styles.iconContainer}>
                  <AiOutlineCheck className={styles.icon} />
                  <Paragraph>{item}</Paragraph>
               </div>
            ))}
            <H2 addClass={styles.header}>{textContent.productPage.text[2]}</H2>
            {polecaneMateriay.map(item => (
               <div className={styles.iconContainer}>
                  <GiRolledCloth className={styles.icon} />
                  <Link
                     to={`${textContent.productPage.materialLink}/${item.rodzaj}/#${item.kod}`}
                     className={styles.link}
                  >
                     {item.nazwa}
                  </Link>
               </div>
            ))}
            <H2 addClass={styles.header}>{textContent.productPage.text[3]}</H2>
            <Specifications specyfikacje={specyfikacje} />
            <H2 addClass={styles.header}>{textContent.productPage.text[4]}</H2>
            <img
               className={styles.sizes_img}
               src={wymiary.file.url}
               alt="sizes"
            />
            <BtnContainer text={textContent.productPage.text[0]} />
         </div>
      </main>
   )
}

export default ProductPage
