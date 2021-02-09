import React, { useContext } from "react"
import { Link } from "gatsby"
import Context from "../../../../context/context"
import Image from "gatsby-image"
import styles from "./Card.module.scss"
import Tag from "../../../UI/Tag/Tag"

const Card = ({ tags, img, link }) => {
   const { textContent } = useContext(Context)
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
      <Link className={styles.Card} to={`/${link}`}>
         <Image fluid={img} className={styles.image} />
         <div className={styles.tags}>
            {tagsForCard &&
               tagsForCard.map(i => (
                  <Tag
                     key={i.text}
                     type={i.type}
                     text={i.text}
                     tooltip={i.tooltip}
                  />
               ))}
         </div>
      </Link>
   )
}

export default Card
