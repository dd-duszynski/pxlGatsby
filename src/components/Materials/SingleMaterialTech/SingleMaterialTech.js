import React from "react"
import styles from "./SingleMaterialTech.module.scss"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"

class SingleMaterialTech extends React.Component {
   state = {
      isSmallDevice: false,
   }
   updateDimensions = () => {
      if (window.innerWidth <= 1000) {
         this.setState({
            isSmallDevice: true,
         })
      } else {
         this.setState({
            isSmallDevice: false,
         })
      }
   }

   componentDidMount() {
      this.updateDimensions()
      window.addEventListener("resize", this.updateDimensions)
   }

   componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions)
   }

   render() {
      const data = this.props.data

      return (
         <div className={styles.Material}>
            <div className={styles.imgContainer} id={data.id}>
               <img 
                  src={data.zdjecia.fluid.src} 
                  alt="" 
                  className={styles.img}
               />
            </div>

            <div className={styles.textContainer}>
               <H2>{data.nazwa}</H2>
               <Paragraph>{data.opis.opis}</Paragraph>
               <Paragraph>
                  <strong>Zadruk:</strong> {data.zadruk}
               </Paragraph>
               <Paragraph>
                  <strong>Szerokość: </strong>
                  {data.szerokosc}
               </Paragraph>
            </div>
         </div>
      )
   }
}
export default SingleMaterialTech
