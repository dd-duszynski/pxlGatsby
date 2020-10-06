import React, { useState } from "react"
import styles from "./Specifications.module.scss"
import H4 from "../UI/Headers/H4"
import { MdDoneAll } from "react-icons/md"
import TemplateItem from "./TemplateItem/TemplateItem"
import {contentPL} from '../../content/contentPL'

const Specifications = ({ data }) => {
   const [productsGroup, setProductsGroup] = useState("banners")
   const [productId, setProductId] = useState(null)
   
   const initialProducts = data.Produkty.nodes

   const setProductsGroupHandler = group => {
      setProductsGroup(group)
   }

   const setProductSpecificationsHandler = prod => {
      setProductId(prod)
   }

   const products = initialProducts.filter(i => {
      return i.rodzaj === productsGroup
   })

   const product = products.filter(i => {
      return i.id === productId
   })

   return (
      <section className={styles.Specifications}>
         <div className={styles.container}>
            <nav className={styles.nav}>
               <H4>{contentPL.specificationText[0]}</H4>
               <div className={styles.verticalLine}></div>
               <H4>{contentPL.specificationText[1]}</H4>
               <div className={styles.verticalLine}></div>
               <H4>
                  <span>{contentPL.specificationText[2]}</span>
                  <MdDoneAll />
               </H4>
            </nav>
            <div className={styles.templates}>
               <ul>
                  {contentPL.productGroup.map(item => {
                     return (
                        <TemplateItem
                           type="group"
                           text={item.text}
                           id={item.id}
                           clickFnc={setProductsGroupHandler}
                           choosen={item.id === productsGroup}
                        />
                     )
                  })}
               </ul>
               <div className={styles.verticalLine}></div>
               <ul>
                  {products
                     ? products.map(item => {
                          console.log("2", item.id)
                          return (
                             <TemplateItem
                                type="product"
                                text={item.nazwa}
                                id={item.id}
                                clickFnc={setProductSpecificationsHandler}
                                images={item.zdjecia[0].fixed.src}
                                choosen={item.id === productId}
                             />
                          )
                       })
                     : null}
               </ul>
               <div className={styles.verticalLine}></div>
               <ul>
                  {product[0]
                     ? product[0].specyfikacje.map(item => {
                          return (
                             <TemplateItem
                                url={item.file.url}
                                type="template"
                                text={item.file.fileName}
                                id={item.id}
                             />
                          )
                       })
                     : null}
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Specifications
