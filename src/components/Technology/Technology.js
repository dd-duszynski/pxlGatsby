import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./Technology.module.scss"
import H2 from "../UI/Headers/H2"
import Paragraph from "../UI/Paragraph/Paragraph"
import Gallery from "../UI/Gallery/Gallery"
import arrowLeft from "../../assets/icons/arrowLeft.svg"
import arrowRight from "../../assets/icons/arrowRight.svg"
import ProductCard from "../Products/ProductCard/ProductCard"

const Technology = ({ machine }) => {
   const [nrImg, setNrImg] = useState(0)
   const [...images] = machine.zdjecia
   const data = useStaticQuery(graphql`
      query {
         Produkty: allContentfulProduktyPl(
            filter: { zadruk: { in: "Sublimacja" } }
            limit: 6
         ) {
            nodes {
               nazwa
               zadruk
               opcjeProduktu
               opis {
                  content {
                     content {
                        value
                     }
                  }
               }
               opisKrotki
               rodzaj
               zdjecia {
                  fluid {
                     src
                  }
               }
               url
            }
         }
      }
   `)

   const imgChangeHandler = item => {
      setNrImg(item)
   }
   const imgPrev = () => {
      let currentState = nrImg
      let test = images.length - 1
      if (currentState > 0) {
         setNrImg(currentState - 1)
      } else if (currentState === 0) {
         setNrImg(test)
      }
   }

   const imgNextHandler = () => {
      let currentState = nrImg
      let arrayOfImgLength = images.length - 1
      if (currentState < arrayOfImgLength) {
         setNrImg(currentState + 1)
      } else if (currentState === arrayOfImgLength) {
         setNrImg(0)
      }
   }
   console.log(data)
   return (
      <section className={styles.Technology}>
         <article className={styles.container}>
            <H2>Opis technologii</H2>
            {/* <H2>{machine.nazwa}</H2> */}
            <Paragraph>{machine.opis.opis}</Paragraph>
            <Gallery
               arrowLeft={arrowLeft}
               arrowRight={arrowRight}
               imgPrev={() => imgPrev()}
               imgNext={() => imgNextHandler()}
               imgArray={images}
               imgCurrent={nrImg}
               imgChange={imgChangeHandler}
               name={machine.nazwa}
            />
            <Paragraph>
               Zastosowanie technologii lateksowej daje możliwość druku na
               nieograniczonej ilości mediów: foliach, tkaninach, papierze,
               płótnie, mediach poliestrowych i innych nośnikach powlekanych i
               niepowlekanych. Dzięki zastosowaniu w farbach bazy wodnej
               otrzymujemy druk ekologiczny w 100%, całkowicie nie szkodliwy dla
               zdrowia. Wydruki nadają się idealnie do użytku wewnętrznego oraz
               wewnętrznego. Posiadają dużo wyższą trwałość niż wydruki
               ekosolwentowe. Dzięki tuszom lateksowym otrzymuje się wydruki
               bardziej nasycone kolorystycznie z intensywną czernią i wysokim
               połyskiem przy wysokiej rozdzielczości do 1200dpi.
            </Paragraph>
            <H2>Powiązane produkty</H2>
            <div className={styles.linkedProductsContainer}>
               {data.Produkty.nodes.map(item => {
                  return <ProductCard data={item} key={item.nazwa} />
               })}
            </div>
         </article>
      </section>
   )
}

export default Technology
