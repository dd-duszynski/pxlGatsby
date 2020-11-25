import React, { useContext, useState, useEffect } from "react"
import Context from "../../../context/context"
import styles from "./SingleMaterialTech.module.scss"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"

const SingleMaterialTech = ({ data }) => {
   const { textContent } = useContext(Context)
   return (
      <div className={styles.Material}>
         <div className={styles.imgContainer} id={data.id}>
            <img src={data.zdjecia.fluid.src} alt="" className={styles.img} />
         </div>

         <div className={styles.textContainer}>
            <H2>{data.nazwa}</H2>
            <Paragraph>{data.opis.opis}</Paragraph>
            <Paragraph>
               <strong>{textContent.materials.text[0]}</strong> {data.zadruk}
            </Paragraph>
            <Paragraph>
               <strong>{textContent.materials.text[1]}</strong>
               {data.szerokosc}
            </Paragraph>
         </div>
      </div>
   )
}
export default SingleMaterialTech
