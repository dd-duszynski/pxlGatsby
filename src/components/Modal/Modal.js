import React from "react"
import styles from "./Modal.module.scss"

const Modal = ({ children, isVisible, switchModalVisibility }) => {
   return isVisible ? (
      <div className={styles.Modal}>
         <div className={styles.backdrop} onClick={switchModalVisibility} />
         <div className={styles.container}>
            <div className={styles.closeBtn} onClick={switchModalVisibility}>
               <div className={styles.line1} />
               <div className={styles.line2} />
            </div>
            <div>{children}</div>
         </div>
      </div>
   ) : null
}

export default Modal
