import React from "react"
import styles from "./BlogCard.module.scss"
import RhombusLink from "../../UI/RhombusLink/RhombusLink"
import Card from "../../UI/Card/Card"
import Paragraph from "../../UI/Paragraph/Paragraph"
import H3 from "../../UI/Headers/H3"
import Subtitle from "../../UI/Subtitle/Subtitle"

const BlogCard = ({ blog }) => {
   const { tytul, zdjecia, dataPublikacji, kategorie, trescKrotka } = blog.node

   return (
      <article className={styles.BlogCard}>
         <Card tags={kategorie} img={zdjecia[0].fluid} />
         <div className={styles.textContainer}>
            <div className={styles.bar}></div>
            <H3 addClass={styles.title}>{tytul}</H3>
            <Subtitle addClass={styles.date}>
               {dataPublikacji} | 5 min czytania
            </Subtitle>
            <Paragraph addClass={styles.paragraph}>
               {trescKrotka.trescKrotka}
            </Paragraph>
            <RhombusLink link={`/blog/${tytul}`}>Czytaj dalej</RhombusLink>
         </div>
      </article>
   )
}

export default BlogCard
