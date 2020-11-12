import React, { useContext } from "react"
import Context from "../../../context/context"
import RhombusNavContainer from "../../UI/RhombusNavContainer/RhombusNavContainer"
import RhombusNavBtn from "../../UI/RhombusNavBtn/RhombusNavBtn"

const SpecificationsNav = () => {
   const { textContent } = useContext(Context)
   return (
      <RhombusNavContainer>
         <RhombusNavBtn
            link={`/${textContent.specifications.navigation.links[0]}`}
         >
            {textContent.specifications.navigation.text[0]}
         </RhombusNavBtn>
         <RhombusNavBtn
            link={`/${textContent.specifications.navigation.links[1]}`}
         >
            {textContent.specifications.navigation.text[1]}
         </RhombusNavBtn>
         <RhombusNavBtn
            link={`/${textContent.specifications.navigation.links[2]}`}
         >
            {textContent.specifications.navigation.text[2]}
         </RhombusNavBtn>
         <RhombusNavBtn
            link={`/${textContent.specifications.navigation.links[3]}`}
         >
            {textContent.specifications.navigation.text[3]}
         </RhombusNavBtn>
         <RhombusNavBtn
            link={`/${textContent.specifications.navigation.links[4]}`}
         >
            {textContent.specifications.navigation.text[4]}
         </RhombusNavBtn>
         <RhombusNavBtn
            link={`/${textContent.specifications.navigation.links[5]}`}
         >
            {textContent.specifications.navigation.text[5]}
         </RhombusNavBtn>
         <RhombusNavBtn
            link={`/${textContent.specifications.navigation.links[6]}`}
         >
            {textContent.specifications.navigation.text[6]}
         </RhombusNavBtn>
         <RhombusNavBtn
            link={`/${textContent.specifications.navigation.links[7]}`}
         >
            {textContent.specifications.navigation.text[7]}
         </RhombusNavBtn>
      </RhombusNavContainer>
   )
}

export default SpecificationsNav
