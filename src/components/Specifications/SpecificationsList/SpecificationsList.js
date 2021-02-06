import React from "react"
import styles from "./SpecificationsList.module.scss"
import ProductItem from "../Items/ProductItem"

const SpecificationsList = ({ data }) => {
   return (
      <section className={styles.SpecificationsList}>
         {data.nodes.map(item => {
            return <ProductItem item={item} key={item.nazwa} />
         })}
      </section>
   )
}

export default SpecificationsList
