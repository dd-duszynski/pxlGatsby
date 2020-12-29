import React from "react"
import styles from "./RhombusBtn.module.scss"

const RhombusBtn = ({ type, link, addClass, text, btn }) => {
   let renderResult
   switch (type) {
      case "input":
         renderResult = (
            <input
               type="submit"
               to={link}
               className={[styles.RhombusBtn, addClass].join(" ")}
               value={text}
            />
         )
         break
      case "button":
         renderResult = (
            <button
               type="submit"
               to={link}
               className={[styles.RhombusBtn, addClass].join(" ")}
            >
               {text}
            </button>
         )
         break
      default:
         renderResult = (
            <input
               type="submit"
               to={link}
               className={[styles.RhombusBtn, addClass].join(" ")}
               value={text}
            />
         )
   }
   return renderResult
}

export default RhombusBtn
