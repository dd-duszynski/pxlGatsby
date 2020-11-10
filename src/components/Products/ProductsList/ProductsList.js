import React, { useEffect } from "react"
import styles from "./ProductsList.module.scss"
import ProductCard from "../ProductCard/ProductCard"

const ProductsList = ({ data }) => {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <section className={styles.ProductsList}>
         {data.nodes.map(item => {
            return <ProductCard data={item} key={item.nazwa} />
         })}
      </section>
   )
}

export default ProductsList
