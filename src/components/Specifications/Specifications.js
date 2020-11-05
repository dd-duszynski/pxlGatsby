import React, { useState } from "react"
import styles from "./Specifications.module.scss"
import GroupItem from "./TemplateItem/GroupItem"
import { contentPL } from "../../content/contentPL"

const Specifications = ({ data }) => {
   const [productsGroup, setProductsGroup] = useState(null)
   const [productId, setProductId] = useState(null)

   const initialProducts = data.Produkty.nodes

   const setProductsGroupHandler = group => {
      productsGroup === group ? setProductsGroup(null) : setProductsGroup(group)
   }

   const setProductHandler = prod => {
      productId === prod ? setProductId(null) : setProductId(prod)
   }

   const products = initialProducts.filter(i => {
      return i.rodzaj === productsGroup
   })

   return (
      <section className={styles.Specifications}>
         <div className={styles.container}>
            <ul className={styles.templates}>
               {contentPL.productGroup.map(item => {
                  return (
                     <GroupItem
                        id={item.id}
                        text={item.text}
                        choosen={item.id === productsGroup}
                        clickFnc={setProductsGroupHandler}
                        products={products}
                        setProductHandler={setProductHandler}
                        productId={productId}
                     />
                  )
               })}
            </ul>
         </div>
      </section>
   )
}

export default Specifications
