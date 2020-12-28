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
            <Link to={textContent.blog.cardsLinks[0]}>
               <Tag
                  type="blogPrinting"
                  value={textContent.blog.cards[0]}
                  link
               />
            </Link>
            <Link to={textContent.blog.cardsLinks[1]}>
               <Tag 
                  type="blogDTP"
                  value={textContent.blog.cards[1]}
                  link
               />
            </Link>
            <Link to={textContent.blog.cardsLinks[2]}>
               <Tag
                  type="blogProduct"
                  value={textContent.blog.cards[2]}
                  link
               />
            </Link>
            <Link to={textContent.blog.cardsLinks[3]}>
               <Tag
                  type="blogTechnology"
                  value={textContent.blog.cards[3]}
                  link
               />
            </Link>
            <Link to={textContent.blog.cardsLinks[4]}>
               <Tag
                  type="blogAll"
                  value={textContent.blog.cards[4]}
                  link
               />
            </Link>
         </div>
      </div>
   )
}

export default SearchBar
