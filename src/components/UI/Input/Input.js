import React from "react"
import styles from "./Input.module.scss"
import { ImUser } from "react-icons/im"
import { IoMdMail } from "react-icons/io"

const Input = ({ type, name, placeholder, val, onChange }) => {
   let iconCSS
   switch (name) {
      case "name":
         iconCSS = <ImUser className={styles.icon} />
         break
      case "email":
         iconCSS = <IoMdMail className={styles.icon} />
         break
      default:
         iconCSS = styles.userIcon
   }

   return (
      <div className={styles.inputsContainer}>
         {iconCSS}
         <input
            onChange={onChange}
            value={val}
            className={styles.input}
            type={type}
            name={name}
            placeholder={placeholder}
         />
      </div>
   )
}

export default Input
