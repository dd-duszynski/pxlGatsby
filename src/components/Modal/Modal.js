import React from "react"
import styles from "./Modal.module.scss"

const Modal = ({ children, isVisible, switchModalVisibility }) => {
   return isVisible ? (
      <div className={styles.Modal}>
         <div className={styles.backdrop} onClick={switchModalVisibility}></div>
         <div className={styles.container}>
            <div className={styles.closeBtn} onClick={switchModalVisibility}>
               <div className={styles.line1}></div>
               <div className={styles.line2}></div>
            </div>
            <div className={styles.box}>{children}</div>
         </div>
      </div>
   ) : null
}

export default Modal
