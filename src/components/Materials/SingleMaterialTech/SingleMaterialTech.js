import React, { useContext } from "react"
import Context from "../../../context/context"
import styles from "./SingleMaterialTech.module.scss"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"
import { RICHTEXT_OPTIONS } from "../../UI/RichText/RichText"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TagsContainer from "../../ProductPage/TagsContainer/TagsContainer"
import { Link } from "gatsby"
import { GiRolledCloth } from "react-icons/gi"

const SingleMaterialTech = ({ data }) => {
   const { textContent } = useContext(Context)
   return (
      <>
         <div className={styles.iconContainer}>
            <GiRolledCloth className={styles.icon} />
            <Link
               to={`${textContent.productPage.materialLink}/${data.rodzaj}/#${data.kod}`}
               className={styles.link}
            >
               {data.nazwa}
            </Link>
         </div>
      </>
   )
}
export default SingleMaterialTech
// import React, { useContext } from "react"
// import Context from "../../../context/context"
// import styles from "./SingleMaterialTech.module.scss"
// import H2 from "../../UI/Headers/H2"
// import Paragraph from "../../UI/Paragraph/Paragraph"
// import { RICHTEXT_OPTIONS } from "../../UI/RichText/RichText"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import TagsContainer from "../../ProductPage/TagsContainer/TagsContainer"
// const SingleMaterialTech = ({ data }) => {
//    const { textContent } = useContext(Context)
//    console.log(data)
//    return (
//       <div className={styles.Material}>
//          <div className={styles.imgContainer} id={data.id}>
//             <img src={data.zdjecia.fixed.src} alt="" className={styles.img} />
//          </div>

//          <div className={styles.textContainer}>
//             <H2>{data.nazwa}</H2>
//             <TagsContainer zadruk={data.druk} opcjeProduktu={data.opcje} />
//             {documentToReactComponents(data.tekst.json, RICHTEXT_OPTIONS)}
//             <Paragraph>
//                <strong>{textContent.materials.text[0]}</strong>
//                {data.druk.map(i => i)}
//             </Paragraph>
//             <Paragraph>
//                <strong>{textContent.materials.text[1]}</strong>
//                {data.szerokosc}
//             </Paragraph>
//          </div>
//       </div>
//    )
// }
// export default SingleMaterialTech
