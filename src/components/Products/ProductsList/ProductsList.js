import React, { useEffect } from "react"
import styles from "./ProductsList.module.scss"
import ProductCard from "../ProductCard/ProductCard"

const ProductsList = ({ data }) => {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <section className={styles.ProductsList}>
         <div className={styles.container}>
            {data.nodes.map(item => {
               return <ProductCard data={item} key={item.nazwa} />
            })}
         </div>
      </section>
   )
}

export default ProductsList
