import React, { useContext } from "react"
import styles from "./SpecificationsNav.module.scss"
import Context from "../../../context/context"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"

const SpecificationsNav = () => {
   const { textContent } = useContext(Context)
   return (
      <div className={styles.SpecificationsNav}>
         <RhombusBtn
            type="navLink"
            link={textContent.specifications.navigation.links[0]}
         >
            {textContent.specifications.navigation.text[0]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={textContent.specifications.navigation.links[1]}
         >
            {textContent.specifications.navigation.text[1]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={textContent.specifications.navigation.links[2]}
         >
            {textContent.specifications.navigation.text[2]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={textContent.specifications.navigation.links[3]}
         >
            {textContent.specifications.navigation.text[3]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={textContent.specifications.navigation.links[4]}
         >
            {textContent.specifications.navigation.text[4]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={textContent.specifications.navigation.links[5]}
         >
            {textContent.specifications.navigation.text[5]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={textContent.specifications.navigation.links[6]}
         >
            {textContent.specifications.navigation.text[6]}
         </RhombusBtn>
         <RhombusBtn
            type="navLink"
            link={textContent.specifications.navigation.links[7]}
         >
            {textContent.specifications.navigation.text[7]}
         </RhombusBtn>
      </div>
   )
}

export default SpecificationsNav
