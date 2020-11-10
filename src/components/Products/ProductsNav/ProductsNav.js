import React, { useContext } from "react"
import Context from "../../../context/context"
import RhombusNavContainer from "../../UI/RhombusNavContainer/RhombusNavContainer"
import RhombusNavBtn from "../../UI/RhombusNavBtn/RhombusNavBtn"

const MaterialNav = () => {
   const { textContent } = useContext(Context)

   return (
      <RhombusNavContainer>
         <RhombusNavBtn link={`/${textContent.products.navigation.links[0]}`}>
            {textContent.products.navigation.text[0]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.products.navigation.links[1]}`}>
            {textContent.products.navigation.text[1]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.products.navigation.links[2]}`}>
            {textContent.products.navigation.text[2]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.products.navigation.links[3]}`}>
            {textContent.products.navigation.text[3]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.products.navigation.links[4]}`}>
            {textContent.products.navigation.text[4]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.products.navigation.links[5]}`}>
            {textContent.products.navigation.text[5]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.products.navigation.links[6]}`}>
            {textContent.products.navigation.text[6]}
         </RhombusNavBtn>
         <RhombusNavBtn link={`/${textContent.products.navigation.links[7]}`}>
            {textContent.products.navigation.text[7]}
         </RhombusNavBtn>
      </RhombusNavContainer>
   )
}

export default MaterialNav
