import React, { useContext } from "react"
import { RICHTEXT_OPTIONS } from "../../UI/RichText/RichText"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TagsContainer from "../../ProductPage/TagsContainer/TagsContainer"
import styles from "./SingleMaterial.module.scss"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"
import VerticalBar from "../../UI/Bars/VerticalBar"
import Context from "../../../context/context"

const SingleMaterial = ({ data, onClick }) => {
   const { textContent } = useContext(Context)

   return (
      <article className={styles.SingleMaterial} id={data.kod}>
         <div className={styles.imgContainer}>
            <img
               className={styles.img}
               src={data.zdjecia.fixed.src}
               alt={data.nazwa}
               onClick={onClick}
            />
            <TagsContainer
               zadruk={data.druk}
               opcjeProduktu={data.opcje}
               addClass={styles.tagContainer}
            />
         </div>
         <div className={styles.textContainer}>
            <div className={styles.barBox}>
               <VerticalBar>
                  <H2>{data.nazwa}</H2>
                  {/* <TagsContainer
                     zadruk={data.druk}
                     opcjeProduktu={data.opcje}
                     /> */}
               </VerticalBar>
               {/* <H2>{data.nazwa}</H2> */}
            </div>
            {documentToReactComponents(data.tekst.json, RICHTEXT_OPTIONS)}
            <div >
               <Paragraph bold inline>
                  {textContent.materials.text[0]}
               </Paragraph>
               <Paragraph inline>{data.druk && data.druk.join(", ")}</Paragraph>
            </div>
            <div>
               <Paragraph bold inline>
                  {textContent.materials.text[1]}
               </Paragraph>
               <Paragraph inline>{data.szerokosc}</Paragraph>
            </div>
         </div>
      </article>
   )
}
export default SingleMaterial
