import React from "react"
import Image from "gatsby-image"
import styles from "./Card.module.scss"
import {contentPL} from "../../../content/contentPL"

const Card = ({ tags, img }) => {
   let tagsWithProperLang = []
   tags.forEach(tag => {
      if (tag === "druk") {
         tagsWithProperLang.push({
            text: contentPL.blogTags[0],
            css: styles.printing,
         })
      } else if (tag === "przygotowanie plików") {
         tagsWithProperLang.push({
            text: contentPL.blogTags[1],
            css: styles.dtp,
         })
      } else if (tag === "produkty") {
         tagsWithProperLang.push({
            text: contentPL.blogTags[2],
            css: styles.products,
         })
      } else if (tag === "technologie") {
         tagsWithProperLang.push({
            text: contentPL.blogTags[3],
            css: styles.technology,
         })
      }
   })

   return (
      <div className={styles.Card}>
         <Image fluid={img} className={styles.image} />
         <div className={styles.tags}>
            {tagsWithProperLang &&
               tagsWithProperLang.map(i => (
                  <div className={i.css}>
                     <p>{i.text}</p>
                  </div>
               ))}
         </div>
      </div>
   )
}

export default Card
