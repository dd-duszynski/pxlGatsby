import React from "react"
import { Link } from "gatsby"
import styles from "./404.module.scss"

const Page404 = () => {
   return (
      <section className={styles.Page404}>
         <div className={styles.container}>
            <p>
               Błąd 404. Niestety w naszym serwisie nie ma takiego adresu.
            </p>
            <Link to="/" className={styles.link}>
               Wróć na stronę główną.
            </Link>
         </div>
      </section>
   )
}

export default Page404
