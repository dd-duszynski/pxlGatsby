import React, { useContext } from "react"
import styles from "./TechnologyNav.module.scss"
import Context from "../../../context/context"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"

const TechnologyNav = () => {
   const { textContent } = useContext(Context)
   return (
      <div className={styles.TechnologyNav}>
         <RhombusBtn type="navLink" link={`/${textContent.technology.navigation.links[0]}`}>
            {textContent.technology.navigation.text[0]}
         </RhombusBtn>
         <RhombusBtn type="navLink" link={`/${textContent.technology.navigation.links[1]}`}>
            {textContent.technology.navigation.text[1]}
         </RhombusBtn>
         <RhombusBtn type="navLink" link={`/${textContent.technology.navigation.links[2]}`}>
            {textContent.technology.navigation.text[2]}
         </RhombusBtn>
         <RhombusBtn type="navLink" link={`/${textContent.technology.navigation.links[3]}`}>
            {textContent.technology.navigation.text[3]}
         </RhombusBtn>
      </div>
   )
}

export default TechnologyNav
