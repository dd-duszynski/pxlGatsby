import React, { useContext } from "react"
import Context from "../../../context/context"
import Image from "gatsby-image"
import styles from "./Card.module.scss"
import Tag from "../../UI/Tag/Tag"

const Card = ({ tags, img }) => {
   const { textContent } = useContext(Context)
   console.log(tags)
   let tagsForCard = []

   tags.forEach(tag => {
      if (tag === "printing") {
         tagsForCard.push({
            type: "blogPrinting",
            text: textContent.blog.tag.printing[0],
            tooltip: textContent.blog.tag.printing[1],
         })
      } else if (tag === "dtp") {
         tagsForCard.push({
            type: "blogDTP",
            text: textContent.blog.tag.dtp[0],
            tooltip: textContent.blog.tag.dtp[1],
         })
      } else if (tag === "products") {
         tagsForCard.push({
            type: "blogProduct",
            text: textContent.blog.tag.products[0],
            tooltip: textContent.blog.tag.products[1],
         })
      } else if (tag === "technology") {
         tagsForCard.push({
            type: "blogTechnology",
            text: textContent.blog.tag.technology[0],
            tooltip: textContent.blog.tag.technology[1],
         })
      }
   })

   return (
      <div className={styles.Card}>
         <Image fluid={img} className={styles.image} />
         <div className={styles.tags}>
            {tagsForCard &&
               tagsForCard.map(i => (
                  <Tag 
                     type={i.type} 
                     text={i.text} 
                     tooltip={i.tooltip} 
                  />
               ))}
         </div>
      </div>
   )
}

export default Card
