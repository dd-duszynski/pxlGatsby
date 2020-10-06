import React from "react"
import styles from "./ProductsNav.module.scss"
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
         <div className={styles.ProductsNav}>
            <AniLink activeClassName={styles.active} fade to={`/${lang.ProductNavigationLinks[9]}`}>
               {lang.ProductNavigation[9]}
            </AniLink>
            <AniLink
               activeClassName={styles.active}
               fade
               to={`/${lang.ProductNavigationLinks[0]}`}
            >
               {lang.ProductNavigation[0]}
            </AniLink>
            <AniLink activeClassName={styles.active} fade to={`/${lang.ProductNavigationLinks[1]}`}>
               {lang.ProductNavigation[1]}
            </AniLink>
            <AniLink
               activeClassName={styles.active}
               fade
               to={`/${lang.ProductNavigationLinks[2]}`}
            >
               {lang.ProductNavigation[2]}
            </AniLink>
            <AniLink activeClassName={styles.active} fade to={`/${lang.ProductNavigationLinks[3]}`}>
               {lang.ProductNavigation[3]}
            </AniLink>
            <AniLink activeClassName={styles.active} fade to={`/${lang.ProductNavigationLinks[4]}`}>
               {lang.ProductNavigation[4]}
            </AniLink>
            <AniLink
               activeClassName={styles.active}
               fade
               to={`/${lang.ProductNavigationLinks[5]}`}
            >
               {lang.ProductNavigation[5]}
            </AniLink>
            <AniLink activeClassName={styles.active} fade to={`/${lang.ProductNavigationLinks[6]}`}>
               {lang.ProductNavigation[6]}
            </AniLink>
         </div>
      )
   }
}

export default MaterialNav
