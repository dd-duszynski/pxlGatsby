import React, { useEffect } from "react"
import styles from "./SpecificationsList.module.scss"
import ProductItem from "../TemplateItem/ProductItem"

const SpecificationsList = ({ data }) => {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <section className={styles.SpecificationsList}>
         {data.nodes.map(item => {
            return <ProductItem item={item} key={item.nazwa} />
         })}
      </section>
   )
}

export default SpecificationsList
