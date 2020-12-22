import React, {useContext} from "react"
import Context from '../../../context/context'
import styles from "./SearchBar.module.scss"
import Tag from "../../UI/Tag/Tag"
import { Link } from "gatsby"

const SearchBar = () => {
   const {textContent} = useContext(Context)
   return (
      <div className={styles.SearchBar}>
         <h3 className={styles.title}>
            {textContent.blog.navigationHeader}
         </h3>
         <div className={styles.container}>
            <Link to={textContent.blog.cardsLinks[0]}>
               <Tag type="printing">
                  {textContent.blog.cards[0]}
               </Tag>
            </Link>
            <Link to={textContent.blog.cardsLinks[1]}>
               <Tag type="products">
                  {textContent.blog.cards[1]}
               </Tag>
            </Link>
            <Link to={textContent.blog.cardsLinks[2]}>
               <Tag type="dtp">
                  {textContent.blog.cards[2]}
               </Tag>
            </Link>
            <Link to={textContent.blog.cardsLinks[3]}>
               <Tag type="technology">
                  {textContent.blog.cards[3]}
               </Tag>
            </Link>
         </div>
      </div>
   )
}

export default SearchBar
