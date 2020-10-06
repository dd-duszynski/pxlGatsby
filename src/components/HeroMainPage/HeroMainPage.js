import React, { Component } from "react"
import styles from "./HeroMainPage.module.scss"
import img_loopka from "../../assets/images/hero_img.jpg"
import Counter from "../Counter/Counter"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"

class Hero extends Component {
   render() {
      return (
         <section className={styles.hero}>
            <LeftBar text="O Nas" />
            <RightBar />
            <article className={styles.container}>
               <div className={styles.magnifier}>
                  <img
                     className={styles.magnifierImage}
                     src={img_loopka}
                     alt="Magnifier"
                  />
               </div>

               <div className={styles.descriptionContainer}>
                  <p className={styles.innerDescription}>
                     Jesteśmy prężnie działającą drukarnią cyfrową,
                     specjalizującą się w druku wielkoformatowym dla klientów z
                     całej Europy. Cechuje nas wysoka jakość i szybkie terminy
                     realizacji, w bardzo konkurencyjnych cenach.
                     <br />
                     <br />
                     Oferujemy druk na różnego rodzaju podłożach: m.in.
                     materiałach flagowych, banerach, siatkach i foliach z
                     szeroką gamą wykończeń i systemów do wyboru.
                     <br />
                     <br />
                     Serdecznie zapraszamy do kontaktu.
                     <br />
                     <br />
                  </p>
               </div>
            </article>
            <Counter />
         </section>
      )
   }
}

export default Hero
