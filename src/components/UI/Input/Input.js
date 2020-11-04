import React from "react"
import styles from "./Input.module.scss"
import { ImUser } from "react-icons/im"
import { IoMdMail } from "react-icons/io"

const Input = ({ idFor, type, name, placeholder }) => {
   let iconCSS
   switch (idFor) {
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
         {/* <span className={iconCSS} for={idFor} /> */}
         {iconCSS}
         <input
            className={styles.input}
            type={type}
            name={name}
            placeholder={placeholder}
            id={idFor}
         />
      </div>
   )
}

export default Input
