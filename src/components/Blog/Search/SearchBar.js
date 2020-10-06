import React from "react"
import styles from "./SearchBar.module.scss"
import Tag from "../../UI/Tag/Tag"
import { Link } from "gatsby"

const SearchBar = () => {
   return (
      <div className={styles.SearchBar}>
         <h3 className={styles.title}>Kategorie</h3>
         <div className={styles.container}>
            <Link to={'/PL/blog/printing'}>
               <Tag type="printing">Druk</Tag>
            </Link>
            <Link to={'/PL/blog/products'}>
               <Tag type="products">Produkty</Tag>
            </Link>
            <Link to={'/PL/blog/dtp'}>
               <Tag type="dtp">Przygotowanie plików</Tag>
            </Link>
            <Link to={'/PL/blog/technology'}>
               <Tag type="technology">Technologie</Tag>
            </Link>
         </div>
      </div>
   )
}

export default SearchBar
