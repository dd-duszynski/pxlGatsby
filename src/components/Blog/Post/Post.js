import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Context from "../../../context/context"
import styles from "./Post.module.scss"
import H1 from "../../UI/Headers/H1"
import H2 from "../../UI/Headers/H2"
import Subtitle from "../../UI/Subtitle/Subtitle"
import Paragraph from "../../UI/Paragraph/Paragraph"
import Carousel from "../../Carousel/Carousel"

const Post = ({ data }) => {
   const {
      tytul,
      dataPublikacji,
      tresc: { tresc },
      zdjecia,
   } = data.post

   console.log(data)

   return (
      <section className={styles.Post}>
         <article className={styles.container}>
            <AniLink fade to="PL/blog">
               {`Blog > ${tytul}`} 
            </AniLink>
            <div className={styles.imageBox}>
               <img src={zdjecia[0].fluid.src} alt="" />
            </div>
            <H1>{tytul}</H1>
            <Subtitle>{dataPublikacji} | 5 min czytania</Subtitle>
            <Paragraph>{tresc}</Paragraph>
         </article>
      </section>
   )
}
export default Post
