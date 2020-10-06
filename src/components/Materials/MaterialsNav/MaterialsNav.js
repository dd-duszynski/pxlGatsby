import React from "react"
import styles from "./MaterialsNav.module.scss"
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
               partiallyActive
               fade
               to={`/${lang.MaterialNavigationLinks[0]}`}
            >
               {lang.MaterialNavigation[0]}
            </AniLink>
            <AniLink
               activeClassName={styles.active}
               partiallyActive
               fade
               to={`/${lang.MaterialNavigationLinks[1]}`}
            >
               {lang.MaterialNavigation[1]}
            </AniLink>
            <AniLink
               activeClassName={styles.active}
               partiallyActive
               fade
               to={`/${lang.MaterialNavigationLinks[2]}`}
            >
               {lang.MaterialNavigation[2]}
            </AniLink>
            <AniLink
               activeClassName={styles.active}
               partiallyActive
               fade
               to={`/${lang.MaterialNavigationLinks[3]}`}
            >
               {lang.MaterialNavigation[3]}
            </AniLink>
            <AniLink
               activeClassName={styles.active}
               partiallyActive
               fade
               to={`/${lang.MaterialNavigationLinks[4]}`}
            >
               {lang.MaterialNavigation[4]}
            </AniLink>
         </div>
      )
   }
}

export default MaterialNav
