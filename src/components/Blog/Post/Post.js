import React, { useContext } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Context from "../../../context/context"
import styles from "./Post.module.scss"
import H1 from "../../UI/Headers/H1"
import Subtitle from "../../UI/Subtitle/Subtitle"
import Breadcrumbs from "../../UI/Breadcrumbs/Breadcrumbs"
import { RICHTEXT_OPTIONS } from "../../UI/RichText/RichText"

const Post = ({ data }) => {
   const { tytul, dataPublikacji, zdjecia, tekst } = data
   const {
      textContent: { blog },
   } = useContext(Context)

   return (
      <section className={styles.Post}>
         <article className={styles.container}>
            <Breadcrumbs
               b1={[blog.breadcrumbs.b1[0], blog.breadcrumbs.b1[1]]}
               b2={[blog.breadcrumbs.b2[0], blog.breadcrumbs.b2[1]]}
               b3={[`${blog.breadcrumbs.b2[0]}${tytul}`, tytul]}
            />
            <div className={styles.imageBox}>
               <img src={zdjecia[0].fluid.src} alt={tytul} />
            </div>
            <H1>{tytul}</H1>
            <Subtitle>
               {dataPublikacji} | 6 {blog.text[1]}
            </Subtitle>
            {documentToReactComponents(tekst.json, RICHTEXT_OPTIONS)}
         </article>
      </section>
   )
}
export default Post
