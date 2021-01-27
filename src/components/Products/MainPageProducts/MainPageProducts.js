import React, { useContext } from "react"
import Context from "../../../context/context"
import styles from "./MainPageProducts.module.scss"
import LeftBar from "../../UI/Bars/LeftBar"
import RightBar from "../../UI/Bars/RightBar"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
import ProductCard from "../ProductCard/ProductCard"

const MainPageProducts = ({ data }) => {
   const { textContent } = useContext(Context)
   return (
      <section className={styles.Products}>
         <div className={styles.container}>
            <LeftBar text={textContent.mainPage.productSection.header} />
            <RightBar />
            <div className={styles.productsContainer}>
               {data.Produkty.nodes.map(item => {
                  return <ProductCard data={item} key={item.nazwa} />
               })}
            </div>
         </div>
         <RhombusBtn
            type="link"
            link={textContent.products.mainLink}
            addClass={styles.seeAll}
         >
            {textContent.mainPage.productSection.seeAllBtn}
         </RhombusBtn>
      </section>
   )
}

export default MainPageProducts
