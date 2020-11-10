import React, { useContext } from "react"
import Context from "../../../context/context"
import RhombusNavContainer from "../../UI/RhombusNavContainer/RhombusNavContainer"
import RhombusNavBtn from "../../UI/RhombusNavBtn/RhombusNavBtn"

const MaterialNav = () => {
   const { textContent } = useContext(Context)

   return (
      <RhombusNavContainer>
         <RhombusNavBtn link={`/${textContent.materials.navigation.links[0]}`}>
            {textContent.materials.navigation.text[0]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.materials.navigation.links[1]}`}>
            {textContent.materials.navigation.text[1]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.materials.navigation.links[2]}`}>
            {textContent.materials.navigation.text[2]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.materials.navigation.links[3]}`}>
            {textContent.materials.navigation.text[3]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.materials.navigation.links[4]}`}>
            {textContent.materials.navigation.text[4]}
         </RhombusNavBtn>
      </RhombusNavContainer>
   )
}

export default MaterialNav
