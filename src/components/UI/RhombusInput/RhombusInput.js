import React from "react"
import styles from "./RhombusInput.module.scss"

const RhombusInput = ({ link, addClass, text }) => {
   return (
      <input
         type="submit"
         to={link}
         className={[styles.RhombusInput, addClass].join(" ")}
         value={text}
      />
   )
}

export default RhombusInput
