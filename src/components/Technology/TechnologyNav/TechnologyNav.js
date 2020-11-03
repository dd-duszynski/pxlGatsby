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
            <RhombusNavBtn link={`/${lang.TechnologyNavigationLinks[0]}`}>
               {lang.TechnologyNavigation[0]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.TechnologyNavigationLinks[1]}`}>
               {lang.TechnologyNavigation[1]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.TechnologyNavigationLinks[2]}`}>
               {lang.TechnologyNavigation[2]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.TechnologyNavigationLinks[3]}`}>
               {lang.TechnologyNavigation[3]}
            </RhombusNavBtn>
         </RhombusNavContainer>
      )
   }
}

export default MaterialNav
