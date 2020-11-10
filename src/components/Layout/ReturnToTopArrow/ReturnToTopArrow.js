import React, { useState, useEffect } from "react"
import styles from "./ReturnToTopArrow.module.scss"

function Arrow(props) {
   let CSSvisibility = props.css
      ? styles.returnToTopArrow_show
      : styles.returnToTopArrow_hide
   return (
      <div
         className={CSSvisibility}
         id="ReturnToTopArrow"
         onClick={props.onClick}
      />
   )
}

const ReturnToTopArrow = () => {
   const [visible, setVisible] = useState(false)
   useEffect(() => {
      window.addEventListener("scroll", handleScroll)
      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])

   const handleScroll = () => {
      if (window.scrollY > 120) {
         setVisible(true)
      } else if (window.scrollY < 120) {
         setVisible(false)
      }
   }
   const handleClick = () => {
      window.scrollTo(0, 0)
   }
   return <Arrow css={visible} onClick={handleClick} onScroll={handleScroll} />
}

export default ReturnToTopArrow
