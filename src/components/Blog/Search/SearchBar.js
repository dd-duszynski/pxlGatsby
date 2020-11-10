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
            {textContent.blog.navigation.categoryHeader}
         </h3>
         <div className={styles.container}>
            <Link to={textContent.blog.navigation.links[0]}>
               <Tag type="printing">
                  {textContent.blog.navigation.text[0]}
               </Tag>
            </Link>
            <Link to={textContent.blog.navigation.links[1]}>
               <Tag type="products">
                  {textContent.blog.navigation.text[1]}
               </Tag>
            </Link>
            <Link to={textContent.blog.navigation.links[2]}>
               <Tag type="dtp">
                  {textContent.blog.navigation.text[2]}
               </Tag>
            </Link>
            <Link to={textContent.blog.navigation.links[3]}>
               <Tag type="technology">
                  {textContent.blog.navigation.text[3]}
               </Tag>
            </Link>
         </div>
      </div>
   )
}

export default SearchBar
