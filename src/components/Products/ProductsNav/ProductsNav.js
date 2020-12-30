import React, { useContext } from "react"
import styles from "./ProductsNav.module.scss"
import Context from "../../../context/context"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"

const ProductsNav = () => {
   const { textContent } = useContext(Context)

   return (
      <div className={styles.ProductsNav}>
         <RhombusBtn
            type="navLink"
            link={`/${textContent.products.navigation.links[0]}`}
         >
            {textContent.products.navigation.text[0]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={`/${textContent.products.navigation.links[1]}`}
         >
            {textContent.products.navigation.text[1]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={`/${textContent.products.navigation.links[2]}`}
         >
            {textContent.products.navigation.text[2]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={`/${textContent.products.navigation.links[3]}`}
         >
            {textContent.products.navigation.text[3]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={`/${textContent.products.navigation.links[4]}`}
         >
            {textContent.products.navigation.text[4]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={`/${textContent.products.navigation.links[5]}`}
         >
            {textContent.products.navigation.text[5]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={`/${textContent.products.navigation.links[6]}`}
         >
            {textContent.products.navigation.text[6]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={`/${textContent.products.navigation.links[7]}`}
         >
            {textContent.products.navigation.text[7]}
         </RhombusBtn>
      </div>
   )
}

export default ProductsNav
