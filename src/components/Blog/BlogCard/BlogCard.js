import React, { useContext } from "react"
import Context from "../../../context/context"
import styles from "./BlogCard.module.scss"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
import Card from "../../UI/Card/Card"
import Paragraph from "../../UI/Paragraph/Paragraph"
import H2 from "../../UI/Headers/H2"
import Subtitle from "../../UI/Subtitle/Subtitle"
import VerticalBar from "../../UI/Bars/VerticalBar"

const BlogCard = ({ blog }) => {
   const { tytul, zdjecia, dataPublikacji, kategorie, trescKrotka } = blog.node
   const { textContent } = useContext(Context)

   return (
      <article className={styles.BlogCard}>
         {/* Left Side*/}
         <Card
            tags={kategorie} img={zdjecia[0].fluid}
            link={`${textContent.blog.breadcrumbs.b2[0]}/${tytul}/`}
         />
         {/* Right Side*/}
         <div className={styles.textContainer}>
            <VerticalBar>
               <H2>{tytul}</H2>
               <Subtitle>
                  {dataPublikacji} | 5 min czytania
               </Subtitle>
            </VerticalBar>
            <Paragraph addClass={styles.paragraph}>
               {trescKrotka.trescKrotka}
            </Paragraph>
            <RhombusBtn
               type="link"
               link={`${textContent.blog.breadcrumbs.b2[0]}/${tytul}/`}
            >
               {textContent.blog.text[0]}
            </RhombusBtn>
         </div>
      </article>
   )
}

export default BlogCard
