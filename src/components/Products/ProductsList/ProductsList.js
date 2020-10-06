import React from "react"
import styles from "./ProductsList.module.scss"
import ProductCard from "../ProductCard/ProductCard"

const Products = ({ data }) => {
   return (
      <div className={styles.Products}>
         {data.nodes.map(item => {
            return <ProductCard data={item} />
         })}
      </div>
   )
}

export default Products
