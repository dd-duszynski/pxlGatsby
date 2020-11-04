import React from "react"
import { Link } from "gatsby"
import styles from "./404.module.scss"
import Paragraph from "../UI/Paragraph/Paragraph"
import { BiErrorCircle } from "react-icons/bi"

const Page404 = () => {
   return (
      <section className={styles.Page404}>
         <div className={styles.container}>
            <Paragraph addClass={styles.text}>
               <BiErrorCircle className={styles.icon1} />
               Błąd 404. Niestety w naszym serwisie nie ma takiego adresu.
               <BiErrorCircle className={styles.icon2} />
            </Paragraph>
            <Link to="/" className={styles.link}>
               <Paragraph>Wróć na stronę główną</Paragraph>
            </Link>
         </div>
      </section>
   )
}

export default Page404
