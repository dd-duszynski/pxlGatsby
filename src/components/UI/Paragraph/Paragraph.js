import React from "react"
import styles from "./Paragraph.module.scss"

const Paragraph = ({ children, addClass, fontSize, bold, inline }) => {
   const css = bold ? styles.ParagraphBold : styles.Paragraph
   return (
      <p
         className={[addClass, css].join(" ")}
         style={{ fontSize: fontSize, display: inline && "inline" }}
      >
         {children}
      </p>
   )
}

export default Paragraph
