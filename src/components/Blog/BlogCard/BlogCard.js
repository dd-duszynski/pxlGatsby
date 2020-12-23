import React, { useContext } from "react"
import Context from "../../../context/context"
import styles from "./BlogCard.module.scss"
import RhombusLink from "../../UI/RhombusLink/RhombusLink"
import Card from "../../UI/Card/Card"
import Paragraph from "../../UI/Paragraph/Paragraph"
import H2 from "../../UI/Headers/H2"
import Subtitle from "../../UI/Subtitle/Subtitle"

const BlogCard = ({ blog }) => {
   const { tytul, zdjecia, dataPublikacji, kategorie, trescKrotka } = blog.node
   const { textContent } = useContext(Context)

   return (
      <article className={styles.BlogCard}>
         <Card tags={kategorie} img={zdjecia[0].fluid} />
         <div className={styles.textContainer}>
            <div className={styles.bar}/>
            <H2 addClass={styles.title}>{tytul}</H2>
            <Subtitle addClass={styles.date}>
               {dataPublikacji} | 5 min czytania
            </Subtitle>
            <Paragraph addClass={styles.paragraph}>
               {trescKrotka.trescKrotka}
            </Paragraph>
            <RhombusLink 
               link={`${textContent.blog.breadcrumbs.b2[0]}${tytul}/`}
            >
               {textContent.blog.text[0]}
            </RhombusLink>
         </div>
      </article>
   )
}

export default BlogCard
