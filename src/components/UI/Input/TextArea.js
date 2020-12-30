import React from "react"
import styles from "./TextArea.module.scss"
import { RiMessage2Fill } from "react-icons/ri"
const TextArea = ({ idFor, name, placeholder, val, onChange }) => {
   return (
      <div className={styles.TextArea}>
         {/* <span className={styles.emailIcon} for={idFor} /> */}
         <RiMessage2Fill className={styles.emailIcon} />
         <textarea
            val={val}
            onChange={onChange}
            className={styles.messageInput}
            name={name}
            id={idFor}
            placeholder={placeholder}
         />
      </div>
   )
}

export default TextArea
