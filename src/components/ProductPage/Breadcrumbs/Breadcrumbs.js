import React from "react"
import { Link } from "gatsby"
import { MdPlayArrow } from "react-icons/md"
import styles from "./Breadcrumbs.module.scss"

const Breadcrumbs = ({ b1, b2, b3 }) => (
   <div className={styles.breadcrumbs}>
      <Link className={styles.link} to={"/"}>
         {b1}
      </Link>
      <MdPlayArrow className={styles.icon}/>
      <Link className={styles.link} to={"/"}>
         {b2}
      </Link>
      <MdPlayArrow className={styles.icon}/>
      <Link className={styles.link} to={"/"}>
         {b3}
      </Link>
   </div>
)

export default Breadcrumbs
