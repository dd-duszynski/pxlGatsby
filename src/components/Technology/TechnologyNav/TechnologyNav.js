import React, { useContext } from "react"
import Context from "../../../context/context"
import RhombusNavContainer from "../../UI/RhombusNavContainer/RhombusNavContainer"
import RhombusNavBtn from "../../UI/RhombusNavBtn/RhombusNavBtn"

const MaterialNav = () => {
   const { textContent } = useContext(Context)
   return (
      <RhombusNavContainer>
         <RhombusNavBtn link={`/${textContent.technology.navigation.links[0]}`}>
            {textContent.technology.navigation.text[0]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.technology.navigation.links[1]}`}>
            {textContent.technology.navigation.text[1]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.technology.navigation.links[2]}`}>
            {textContent.technology.navigation.text[2]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.technology.navigation.links[3]}`}>
            {textContent.technology.navigation.text[3]}
         </RhombusNavBtn>
      </RhombusNavContainer>
   )
}

export default MaterialNav
