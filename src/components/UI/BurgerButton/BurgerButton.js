import React from "react"
import styles from "./BurgerButton.module.scss"

const BurgerButton = ({ isActive, toggleNavSlide }) => {
   return (
      <div
         className={isActive ? styles.burger_active : styles.burger}
         onClick={e => toggleNavSlide(e)}
      >
         <div className={styles.line}></div>
         <div className={styles.line}></div>
         <div className={styles.line}></div>
      </div>
   )
}

export default BurgerButton
