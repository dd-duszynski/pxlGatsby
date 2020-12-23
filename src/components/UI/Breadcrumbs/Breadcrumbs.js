import React from "react"
import { Link } from "gatsby"
import { MdPlayArrow } from "react-icons/md"
import styles from "./Breadcrumbs.module.scss"

const Breadcrumbs = ({ b1, b2, b3 }) => {
   return (
      <div className={styles.breadcrumbs}>
         <Link 
            className={styles.link} 
            to={b1[0]}
         >
            {b1[1]}
         </Link>
         <MdPlayArrow className={styles.icon} />
         <Link 
            className={styles.link} 
            to={b2[0]}
         >
            {b2[1]}
         </Link>
         <MdPlayArrow className={styles.icon} />
         <Link 
            className={styles.link} 
            to={b3[0]}
         >
            {b3[1]}
         </Link>
      </div>
   )
}

export default Breadcrumbs
