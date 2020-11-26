import React, {useContext} from "react"
import { Link } from "gatsby"
import Context from "../../context/context"
import styles from "./404.module.scss"
import Paragraph from "../UI/Paragraph/Paragraph"
import { BiErrorCircle } from "react-icons/bi"

const Page404 = () => {
   const { textContent } = useContext(Context)
   return (
      <section className={styles.Page404}>
         <div className={styles.container}>
            <Paragraph addClass={styles.text}>
               <BiErrorCircle className={styles.icon1} />
                  {textContent.page404.text[0]}
               <BiErrorCircle className={styles.icon2} />
            </Paragraph>
            <Link to="/" className={styles.link}>
               <Paragraph>
                  {textContent.page404.text[1]}
               </Paragraph>
            </Link>
         </div>
      </section>
   )
}

export default Page404
