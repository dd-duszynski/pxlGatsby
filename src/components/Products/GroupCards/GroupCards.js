import React from "react"
import styles from "./GroupCards.module.scss"
import SingleGroupCard from "./SingleGroupCard/SingleGroupCard"
import { GeneralPL } from "../../../content/GeneralPL"
import { GeneralEN } from "../../../content/GeneralEN"
import { GeneralFR } from "../../../content/GeneralFR"
import { GeneralDE } from "../../../content/GeneralDE"

const GroupCards = ({ language, type }) => {
   let prods

   if (language === "PL" && type === "products") {
      prods = GeneralPL.ProductsGroups
   } else if (language === "PL" && type === "materials") {
      prods = GeneralPL.MaterialsGroups
   }

   return (
      <div className={styles.GroupCards}>
         {prods.map(item => {
            return (
               <SingleGroupCard
                  key={item.url}
                  title={item.title}
                  description={item.description}
                  url={item.url}
               />
            )
         })}
      </div>
   )
}

export default GroupCards
