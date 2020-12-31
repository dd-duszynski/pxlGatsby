import React from "react"
import styles from "./TextArea.module.scss"
import { RiMessage2Fill } from "react-icons/ri"
const TextArea = ({ name, placeholder, val, onChange }) => {
   return (
      <div className={styles.TextArea}>
         <RiMessage2Fill className={styles.emailIcon} />
         <textarea
            className={styles.messageInput}
            val={val}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
         />
      </div>
   )
}

export default TextArea
