import React, { useContext } from "react"
import styles from "./MaterialNav.module.scss"
import Context from "../../../context/context"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"

const MaterialNav = () => {
   const { textContent } = useContext(Context)

   return (
      <div className={styles.MaterialsNav}>
         <RhombusBtn type="navLink" link={`/${textContent.materials.navigation.links[0]}`}>
            {textContent.materials.navigation.text[0]}
         </RhombusBtn>
         <RhombusBtn type="navLink" link={`/${textContent.materials.navigation.links[1]}`}>
            {textContent.materials.navigation.text[1]}
         </RhombusBtn>
         <RhombusBtn type="navLink" link={`/${textContent.materials.navigation.links[2]}`}>
            {textContent.materials.navigation.text[2]}
         </RhombusBtn>
         <RhombusBtn type="navLink" link={`/${textContent.materials.navigation.links[3]}`}>
            {textContent.materials.navigation.text[3]}
         </RhombusBtn>
         <RhombusBtn type="navLink" link={`/${textContent.materials.navigation.links[4]}`}>
            {textContent.materials.navigation.text[4]}
         </RhombusBtn>
      </div>
   )
}

export default MaterialNav
