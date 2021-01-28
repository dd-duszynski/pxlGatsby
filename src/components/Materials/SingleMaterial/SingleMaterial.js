import React, { useContext, useState, useEffect } from "react"
import { RICHTEXT_OPTIONS } from "../../UI/RichText/RichText"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TagsContainer from "../../ProductPage/TagsContainer/TagsContainer"
import styles from "./SingleMaterial.module.scss"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"
import HorizontalBar from "../../UI/Bars/HorizontalBar"
import Context from "../../../context/context"

const SingleMaterial = ({ data }) => {
   const { textContent } = useContext(Context)

   return (
      <article className={styles.SingleMaterial} id={data.kod}>
         <img
            className={styles.img}
            src={data.zdjecia.fixed.src}
            alt={data.nazwa}
         />
         <div className={styles.textContainer}>
            <div className={styles.barBox}>
               <HorizontalBar>
                  <H2>{data.nazwa}</H2>
                  <TagsContainer
                     zadruk={data.druk}
                     opcjeProduktu={data.opcje}
                  />
               </HorizontalBar>
            </div>
            {documentToReactComponents(data.tekst.json, RICHTEXT_OPTIONS)}
            <Paragraph>
               <strong>{textContent.materials.text[0]}</strong>
               {data.druk && data.druk.join(", ")}
            </Paragraph>
            <Paragraph>
               <strong>{textContent.materials.text[1]}</strong>
               {data.szerokosc}
            </Paragraph>
         </div>
      </article>
   )
}
export default SingleMaterial
