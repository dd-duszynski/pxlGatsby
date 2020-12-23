import React, { useContext } from "react"
import { Link } from "gatsby"
import Context from "../../context/context"
import Carousel from "../Carousel/Carousel"
import Paragraph from "../UI/Paragraph/Paragraph"
import H1 from "../UI/Headers/H1"
import H2 from "../UI/Headers/H2"
import RhombusLink from "../UI/RhombusLink/RhombusLink"
import BreadcrumbsContainer from "./BreadcrumbsContainer/BreadcrumbsContainer"
import Specifications from "./Specifications/Specifications"
import { GiRolledCloth } from "react-icons/gi"
import { AiOutlineCheck } from "react-icons/ai"
import styles from "./ProductPage.module.scss"

const BtnContainer = ({ text }) => {
   return (
      <div className={styles.btnContainer}>
         <RhombusLink addClass={styles.btn}>{text}</RhombusLink>
      </div>
   )
}

const ProductPage = ({ data }) => {
   const { textContent: {productPage} } = useContext(Context)
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
   console.log("images", data)

   const options = {
      renderNode: {
         "embedded-asset-block": node => {
            // console.log(node)
         },
      },
   }
   return (
      <main className={styles.ProductPage}>
         <div className={styles.leftSection}>
            <BreadcrumbsContainer
               nazwa={nazwa}
               rodzaj={rodzaj}
               text={productPage}
               url={url}
            />
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
            <BtnContainer text={productPage.text[0]} />
         </div>

         <div className={styles.rightSection}>
            <H1 addClass={styles.header}>{nazwa}</H1>
            <Paragraph fontSize="15px">
               {opis.content[0].content[0].value}
            </Paragraph>
            <H2 addClass={styles.header}>{productPage.text[1]}</H2>
            {zalety.map(item => (
               <div className={styles.iconContainer}>
                  <AiOutlineCheck className={styles.icon} />
                  <Paragraph fontSize="15px">{item}</Paragraph>
               </div>
            ))}
            <H2 addClass={styles.header}>{productPage.text[2]}</H2>
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
            <H2 addClass={styles.header}>{productPage.text[3]}</H2>
            <Specifications specyfikacje={specyfikacje} />
            <H2 addClass={styles.header}>{productPage.text[4]}</H2>
            <img
               className={styles.sizes_img}
               src={wymiary.file.url}
               alt="sizes"
            />
            <BtnContainer text={productPage.text[0]} />
         </div>
      </main>
   )
}

export default ProductPage
