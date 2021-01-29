import React from "react"
import styles from "./Modal.module.scss"

const Modal = ({ children, isVisible, switchModalVisibility, type }) => {
   const css = type === "img" ? styles.imgContainer : styles.container
   return isVisible ? (
      <div className={styles.Modal}>
         <div className={styles.backdrop} onClick={switchModalVisibility} />
         <div className={css}>
            <div className={styles.closeBtn} onClick={switchModalVisibility}>
               <div className={styles.line1} />
               <div className={styles.line2} />
            </div>
            {children}
         </div>
      </div>
   ) : null
}

export default Modal
