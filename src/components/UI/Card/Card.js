import React, { useContext } from "react"
import Context from "../../../context/context"
import Image from "gatsby-image"
import styles from "./Card.module.scss"
import Tag from "../../UI/Tag/Tag"

const Card = ({ tags, img }) => {
   const { textContent } = useContext(Context)
   console.log(tags)
   let tagsWithProperLang = []

   tags.forEach(tag => {
      if (tag === "printing") {
         tagsWithProperLang.push({
            type: "blogPrinting",
            text: textContent.blog.cards[0],
            tooltip: textContent.blog.cards[0],
         })
      } else if (tag === "dtp") {
         tagsWithProperLang.push({
            type: "blogDTP",
            text: textContent.blog.cards[1],
            tooltip: textContent.blog.cards[1],
         })
      } else if (tag === "products") {
         tagsWithProperLang.push({
            type: "blogProduct",
            text: textContent.blog.cards[2],
            tooltip: textContent.blog.cards[2],
         })
      } else if (tag === "technology") {
         tagsWithProperLang.push({
            type: "blogTechnology",
            text: textContent.blog.cards[3],
            tooltip: textContent.blog.cards[3],
         })
      }
   })

   return (
      <div className={styles.Card}>
         <Image fluid={img} className={styles.image} />
         <div className={styles.tags}>
            {tagsWithProperLang &&
               tagsWithProperLang.map(i => (
                  <Tag 
                     type={i.type} 
                     value={i.text} 
                     tooltip={i.tooltip} 
                  />
               ))}
         </div>
      </div>
   )
}

export default Card
