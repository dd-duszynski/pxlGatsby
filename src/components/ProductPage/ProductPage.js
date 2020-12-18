import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Context from "../../context/context"
import Carousel from "../Carousel/Carousel"
import Paragraph from "../UI/Paragraph/Paragraph"
import H1 from "../UI/Headers/H1"
import H2 from "../UI/Headers/H2"
import RhombusLink from "../UI/RhombusLink/RhombusLink"
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs"
import Specifications from "./Specifications/Specifications"
import { GiRolledCloth } from "react-icons/gi"
import { AiOutlineCheck, AiOutlineFilePdf } from "react-icons/ai"
import styles from "./ProductPage.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BtnContainer = ({ text }) => {
   return (
      <div className={styles.btnContainer}>
         <RhombusLink addClass={styles.btn}>{text}</RhombusLink>
      </div>
   )
}

const ProductPage = ({ data }) => {
   const { textContent } = useContext(Context)
   console.log("textContent", textContent)
   console.log("ProductPage", data.contentfulProduktyPl)
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
   } = data.contentfulProduktyPl

   const [...images] = zdjecia
   const options = {
      renderNode: {
         "embedded-asset-block": node => {
            console.log(node)
         },
      },
   }
   return (
      <main className={styles.ProductPage}>
         <div className={styles.leftSection}>
            <Breadcrumbs
               nazwa={nazwa}
               rodzaj={rodzaj}
               textContent={textContent}
               url={url}
            />
            <Carousel>
               {images.map((item, index) => (
                  <div className={styles.imgContainer}>
                     <img
                        src={item.fluid.src}
                        alt={nazwa}
                        key={index}
                        className={styles.img}
                     />
                  </div>
               ))}
            </Carousel>
            <BtnContainer text={textContent.productPage.text[0]} />
         </div>

         <div className={styles.rightSection}>
            <H1 addClass={styles.header}>{nazwa}</H1>
            <Paragraph fontSize="15px">
               {opis.content[0].content[0].value}
            </Paragraph>
            <H2 addClass={styles.header}>{textContent.productPage.text[1]}</H2>
            {zalety.map(item => (
               <div className={styles.iconContainer}>
                  <AiOutlineCheck className={styles.icon} />
                  <Paragraph fontSize="15px">{item}</Paragraph>
               </div>
            ))}
            <H2 addClass={styles.header}>{textContent.productPage.text[2]}</H2>
            {polecaneMateriay.map(item => (
               <div className={styles.iconContainer}>
                  <GiRolledCloth className={styles.icon} />
                  <Link
                     to={`/PL/materials/${item.rodzaj}/#${item.kod}`}
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
