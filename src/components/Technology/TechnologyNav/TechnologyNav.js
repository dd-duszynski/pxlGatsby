import React from "react"
import styles from "./TechnologyNav.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GeneralPL } from "../../../content/GeneralPL"
import { GeneralEN } from "../../../content/GeneralEN"
import { GeneralDE } from "../../../content/GeneralDE"
import { GeneralFR } from "../../../content/GeneralFR"

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
         <div className={styles.MaterialNav}>
            <AniLink 
               activeClassName={styles.active} 
               fade to={`/${lang.TechnologyNavigationLinks[0]}`}
            >
               {lang.TechnologyNavigation[0]}
            </AniLink>

            <AniLink 
               activeClassName={styles.active} 
               fade to={`/${lang.TechnologyNavigationLinks[1]}`}
            >
               {lang.TechnologyNavigation[1]}
            </AniLink>

            <AniLink 
               activeClassName={styles.active} 
               fade to={`/${lang.TechnologyNavigationLinks[2]}`}
            >
               {lang.TechnologyNavigation[2]}
            </AniLink>

            <AniLink 
               activeClassName={styles.active} 
               fade to={`/${lang.TechnologyNavigationLinks[3]}`}
            >
               {lang.TechnologyNavigation[3]}
            </AniLink>

         </div>
      )
   }
}

export default MaterialNav
