import React, { useContext } from "react"
import Context from "../../../context/context"
import styles from "./SearchBar.module.scss"
import Tag from "../../UI/Tag/Tag"
import { Link } from "gatsby"

const SearchBar = () => {
   const { textContent } = useContext(Context)

   return (
      <div className={styles.SearchBar}>
         <h3 className={styles.title}>{textContent.blog.navigationHeader}</h3>
         <div className={styles.container}>
            <Link to={`/${textContent.blog.tag.printing[2]}`}>
               <Tag
                  type="blogPrinting"
                  text={textContent.blog.tag.printing[0]}
                  noTooltip
               />
            </Link>
            <Link to={`/${textContent.blog.tag.dtp[2]}`}>
               <Tag 
                  type="blogDTP"
                  text={textContent.blog.tag.dtp[0]}
                  noTooltip
               />
            </Link>
            <Link to={`/${textContent.blog.tag.products[2]}`}>
               <Tag
                  type="blogProduct"
                  text={textContent.blog.tag.products[0]}
                  noTooltip
               />
            </Link>
            <Link to={`/${textContent.blog.tag.technology[2]}`}>
               <Tag
                  type="blogTechnology"
                  text={textContent.blog.tag.technology[0]}
                  noTooltip
               />
            </Link>
            <Link to={`/${textContent.blog.tag.all[2]}`}>
               <Tag
                  type="blogAll"
                  text={textContent.blog.tag.all[0]}
                  noTooltip
               />
            </Link>
         </div>
      </div>
   )
}

export default SearchBar
