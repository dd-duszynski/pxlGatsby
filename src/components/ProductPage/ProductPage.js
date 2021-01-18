import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GiRolledCloth } from "react-icons/gi"
import { AiOutlineCheck } from "react-icons/ai"
import Context from "../../context/context"
import Carousel from "../Carousel/Carousel"
import Paragraph from "../UI/Paragraph/Paragraph"
import H1 from "../UI/Headers/H1"
import H2 from "../UI/Headers/H2"
import RhombusBtn from "../UI/RhombusBtn/RhombusBtn"
import BreadcrumbsContainer from "./BreadcrumbsContainer/BreadcrumbsContainer"
import Specifications from "./Specifications/Specifications"
import styles from "./ProductPage.module.scss"
import { RICHTEXT_OPTIONS } from "../UI/RichText/RichText"
import TagsContainer from "./TagsContainer/TagsContainer"
import Modal from "../Modal/Modal"
import ContactForm from "../Contact/ContactForm/ContactForm"

const ProductPage = ({ data }) => {
   const { textContent, isModalOpen, switchModalVisibility } = useContext(
      Context
   )
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
         <Modal
            isVisible={isModalOpen}
            switchModalVisibility={switchModalVisibility}
         >
            <ContactForm text={textContent.mainPage.contact.text} />
         </Modal>
         <div className={styles.leftSection}>
            <BreadcrumbsContainer
               nazwa={nazwa}
               rodzaj={rodzaj}
               text={textContent.productPage}
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

            <div
               className={styles.btnContainer}
               onClick={switchModalVisibility}
            >
               <RhombusBtn
                  type="button"
                  addClass={styles.btn}
                  text={textContent.productPage.text[0]}
               />
            </div>
         </div>

         <div className={styles.rightSection}>
            <H1 addClass={styles.header}>{nazwa}</H1>
            <TagsContainer zadruk={zadruk} opcjeProduktu={opcjeProduktu} />
            {documentToReactComponents(opis.json, RICHTEXT_OPTIONS)}
            <H2 addClass={styles.header}>{textContent.productPage.text[1]}</H2>
            {zalety.map(item => (
               <div className={styles.iconContainer}>
                  <AiOutlineCheck className={styles.icon} />
                  <Paragraph>{item}</Paragraph>
               </div>
            ))}

            {polecaneMateriay ? (
               <>
                  <H2 addClass={styles.header}>
                     {textContent.productPage.text[2]}
                  </H2>
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
               </>
            ) : null}
            {specyfikacje ? (
               <>
                  <H2 addClass={styles.header}>
                     {textContent.productPage.text[3]}
                  </H2>
                  <Specifications specyfikacje={specyfikacje} />
               </>
            ) : null}

            {wymiary ? (
               <>
                  <H2 addClass={styles.header}>
                     {textContent.productPage.text[4]}
                  </H2>
                  <img
                     className={styles.sizes_img}
                     src={wymiary.file.url}
                     alt="sizes"
                  />
               </>
            ) : null}

            <div
               className={styles.btnContainer}
               onClick={switchModalVisibility}
            >
               <RhombusBtn
                  type="button"
                  addClass={styles.btn}
                  text={textContent.productPage.text[0]}
               />
            </div>
         </div>
      </main>
   )
}

export default ProductPage
