import React from "react"
import { GeneralPL } from "../../../content/GeneralPL"
import { GeneralEN } from "../../../content/GeneralEN"
import { GeneralDE } from "../../../content/GeneralDE"
import { GeneralFR } from "../../../content/GeneralFR"
import RhombusNavContainer from "../../UI/RhombusNavContainer/RhombusNavContainer"
import RhombusNavBtn from "../../UI/RhombusNavBtn/RhombusNavBtn"

class MaterialNav extends React.Component {
   componentDidMount() {
      window.scrollTo(0, 0)
   }

   render() {
      let lang
      if (this.props.language === "PL") {
         lang = GeneralPL
      } else if (this.props.language === "EN") {
         lang = GeneralEN
      } else if (this.props.language === "DE") {
         lang = GeneralDE
      } else if (this.props.language === "FR") {
         lang = GeneralFR
      }

      return (
         <RhombusNavContainer>
            <RhombusNavBtn link={`/${lang.MaterialNavigationLinks[0]}`}>
               {lang.MaterialNavigation[0]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.MaterialNavigationLinks[1]}`}>
               {lang.MaterialNavigation[1]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.MaterialNavigationLinks[2]}`}>
               {lang.MaterialNavigation[2]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.MaterialNavigationLinks[3]}`}>
               {lang.MaterialNavigation[3]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.MaterialNavigationLinks[4]}`}>
               {lang.MaterialNavigation[4]}
            </RhombusNavBtn>
         </RhombusNavContainer>
      )
   }
}

export default MaterialNav
