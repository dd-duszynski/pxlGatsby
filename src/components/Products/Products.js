import React from "react"
import styles from "./Products.module.scss"
import GroupCards from "../GroupCards/GroupCards"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"

const Products = ({ language }) => {
   return (
      <section className={styles.Products}>
         <div className={styles.container}>
            <LeftBar text="Produkty" />
            <RightBar />
            Tu będą wybrane produkty
         </div>
      </section>
   )
}

export default Products
