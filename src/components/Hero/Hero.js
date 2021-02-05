import React, { useContext } from "react"
import Context from "../../context/context"
import styles from "./Hero.module.scss"
import H2 from "../UI/Headers/H2"
import opel from '../../assets/images/opelk.svg'
import bmw from '../../assets/images/bmw.jpg'
import ikea from '../../assets/images/ikea.png'


const Contact = () => {
   const { textContent } = useContext(Context)
   return (
      <section className={styles.Contact} id="contact">
         <div className={styles.container}>
            <div className={styles.headerBox}>
               <H2 addClass={styles.header}>
                  Zaufali Nam
               </H2>
            </div>
            <div className={styles.imgBox}>
               <img src={opel} alt ="" className={styles.opel}/>
            </div>
            <div className={styles.imgBox}>
               <img src={bmw} alt ="" className={styles.bmw}/>
            </div>
            <div className={styles.imgBox}>
               <img src={ikea} alt ="" className={styles.ikea}/>
            </div>
         </div>
      </section>
   )
}

export default Contact
