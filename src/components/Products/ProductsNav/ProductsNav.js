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
            <RhombusNavBtn link={`/${lang.ProductNavigationLinks[9]}`}>
               {lang.ProductNavigation[9]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.ProductNavigationLinks[0]}`}>
               {lang.ProductNavigation[0]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.ProductNavigationLinks[1]}`}>
               {lang.ProductNavigation[1]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.ProductNavigationLinks[2]}`}>
               {lang.ProductNavigation[2]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.ProductNavigationLinks[3]}`}>
               {lang.ProductNavigation[3]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.ProductNavigationLinks[4]}`}>
               {lang.ProductNavigation[4]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.ProductNavigationLinks[5]}`}>
               {lang.ProductNavigation[5]}
            </RhombusNavBtn>
            <RhombusNavBtn link={`/${lang.ProductNavigationLinks[6]}`}>
               {lang.ProductNavigation[6]}
            </RhombusNavBtn>
         </RhombusNavContainer>
      )
   }
}

export default MaterialNav
