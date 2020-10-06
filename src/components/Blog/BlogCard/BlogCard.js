import React from "react"

import styles from "./BlogCard.module.scss"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
import Card from '../../UI/Card/Card'
const BlogCard = ({ blog }) => {
   const { tytul, zdjecia, dataPublikacji, kategorie, trescKrotka } = blog.node

   return (
      <article className={styles.BlogCard}>
         <Card
            tags={kategorie}
            img={zdjecia[0].fluid}
         />
         <div className={styles.textContainer}>
            <div className={styles.bar}></div>
            <h1 className={styles.title}>{tytul}</h1>
            <span className={styles.date}>
               {dataPublikacji} | 5 min czytania
            </span>
            <p className={styles.paragraph}>
               {trescKrotka.trescKrotka}
            </p>
            {/* <div className={styles.linkContainer}> */}
            <RhombusBtn link={`/blog/${tytul}`}>
               Czytaj dalej
            </RhombusBtn>
            {/* </div> */}
         </div>
      </article>
   )
}

export default BlogCard
