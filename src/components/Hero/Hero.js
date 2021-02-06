import React, { useContext } from "react"
import Context from "../../context/context"
import styles from "./Hero.module.scss"
import opel from '../../assets/images/opelk.svg'
import bmw from '../../assets/images/bmw.jpg'
import ikea from '../../assets/images/ikea.png'
import BoxHeader from '../UI/BoxHeader/BoxHeader'

const Contact = () => {
   const { textContent } = useContext(Context)
   return (
      <section className={styles.Contact} id="contact">
         <div className={styles.container}>
            <BoxHeader text="Zaufali Nam" />
            <div className={styles.imgBox}>
               <img src={opel} alt="" className={styles.opel} />
            </div>
            <div className={styles.imgBox}>
               <img src={bmw} alt="" className={styles.bmw} />
            </div>
            <div className={styles.imgBox}>
               <img src={ikea} alt="" className={styles.ikea} />
            </div>
         </div>
      </section>
   )
}

export default Contact
