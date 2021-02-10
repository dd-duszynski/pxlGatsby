// import React, { useContext, useEffect, useState } from "react"
// import Context from "../../../context/context"
// import styles from "./MainPageProducts.module.scss"
// import LeftBar from "../../UI/Bars/LeftBar"
// import RightBar from "../../UI/Bars/RightBar"
// import H2 from "../../UI/Headers/H1"
// import ProductCard from "../ProductCard/ProductCard"
// import Carousel from "../../Carousel/Carousel"

// const MainPageProducts = ({ data }) => {
//    const { textContent } = useContext(Context)
//    // const [isSmallDevice, setSmallDevice] = useState(false)
//    const [isLargeDevice, setLargeDevice] = useState(1)

//    const updateDimensions = () => {
//       if (window.innerWidth <= 900) {
//          setLargeDevice(1)
//       } else {
//          setLargeDevice(2)
//       }
//    }

//    useEffect(() => {
//       updateDimensions()
//       window.addEventListener("resize", updateDimensions)
//       return () => {
//          window.removeEventListener("resize", updateDimensions)
//       }
//    }, [])

//    const banners = data.Produkty.nodes.filter(i => i.rodzaj === "banners")
//    const flags = data.Produkty.nodes.filter(i => i.rodzaj === "flags")
//    const covid = data.Produkty.nodes.filter(i => i.rodzaj === "covid")
//    const rollups = data.Produkty.nodes.filter(i => i.rodzaj === "rollups")
//    const walls = data.Produkty.nodes.filter(i => i.rodzaj === "walls")
//    const stands = data.Produkty.nodes.filter(i => i.rodzaj === "stands")
//    const tribunes = data.Produkty.nodes.filter(i => i.rodzaj === "tribunes")
//    const others = data.Produkty.nodes.filter(i => i.rodzaj === "others")
//    return (
//       <section className={styles.Products}>
//          <div className={styles.container}>
//             <LeftBar text={textContent.mainPage.productSection.header} />
//             <RightBar />
//             <H2 addClass={styles.header}>Covid:</H2>
//             <Carousel itemsToScroll={2} itemsToShow={isLargeDevice}>
//                {covid.map(item => {
//                   return <ProductCard data={item} key={item.nazwa} />
//                })}
//             </Carousel>
//             <div className={styles.line} />
//             <H2 addClass={styles.header}>Banery:</H2>
//             <Carousel itemsToScroll={2} itemsToShow={isLargeDevice}>
//                {banners.map(item => {
//                   return <ProductCard data={item} key={item.nazwa} />
//                })}
//             </Carousel>
//             <div className={styles.line} />
//             <H2 addClass={styles.header}>Flagi:</H2>
//             <Carousel itemsToScroll={2} itemsToShow={isLargeDevice}>
//                {flags.map(item => {
//                   return <ProductCard data={item} key={item.nazwa} />
//                })}
//             </Carousel>
//             <div className={styles.line} />
//             <H2 addClass={styles.header}>Rollupy:</H2>
//             <Carousel itemsToScroll={2} itemsToShow={isLargeDevice}>
//                {rollups.map(item => {
//                   return <ProductCard data={item} key={item.nazwa} />
//                })}
//             </Carousel>
//             <div className={styles.line} />
//             <H2 addClass={styles.header}>Ścianki:</H2>
//             <Carousel itemsToScroll={2} itemsToShow={isLargeDevice}>
//                {walls.map(item => {
//                   return <ProductCard data={item} key={item.nazwa} />
//                })}
//             </Carousel>
//             <div className={styles.line} />
//             <H2 addClass={styles.header}>Standy:</H2>
//             <Carousel itemsToScroll={2} itemsToShow={isLargeDevice}>
//                {stands.map(item => {
//                   return <ProductCard data={item} key={item.nazwa} />
//                })}
//             </Carousel>
//             <div className={styles.line} />
//             <H2 addClass={styles.header}>Trybunki:</H2>
//             <Carousel itemsToScroll={2} itemsToShow={isLargeDevice}>
//                {tribunes.map(item => {
//                   return <ProductCard data={item} key={item.nazwa} />
//                })}
//             </Carousel>
//             <div className={styles.line} />
//             <H2 addClass={styles.header}>Pozostałe:</H2>
//             <Carousel itemsToScroll={2} itemsToShow={isLargeDevice}>
//                {others.map(item => {
//                   return <ProductCard data={item} key={item.nazwa} />
//                })}
//             </Carousel>
//          </div>
//       </section>
//    )
// }
// export default MainPageProducts

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
         <LeftBar text={textContent.mainPage.productSection.header} />
         <RightBar />
         <div className={styles.container}>
            {data.Produkty.nodes.map(item => {
               return <ProductCard data={item} key={item.nazwa} />
            })}
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
