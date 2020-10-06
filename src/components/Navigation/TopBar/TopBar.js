import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./TopBar.module.scss"

const TopBar = () => {
   const path = window.location.pathname.slice(3)

   return (
      <div className={styles.Navigation__topBar}>
         <div className={styles.Navigation__phone}>
            <span />
            <a href="tel:+48 695-859-808">+48 695-859-808</a>
         </div>

         <div className={styles.Navigation__mail}>
            <span />
            <a href="mailto:info@printxl.pl">info@printxl.pl</a>
         </div>
         <div className={styles.Navigation__languages}>
            <AniLink
               to={`/EN/${path}`}
               className={styles.flagEN}
               activeClassName={styles.flagEN_Active}
               partiallyActive
            />
            <AniLink
               to={`/PL/${path}`}
               className={styles.flagPL}
               activeClassName={styles.flagPL_Active}
               partiallyActive
            />
            <AniLink
               to={`/DE/${path}`}
               className={styles.flagDE}
               activeClassName={styles.flagDE_Active}
               partiallyActive
            />
            <AniLink
               to={`/FR/${path}`}
               className={styles.flagFR}
               activeClassName={styles.flagFR_Active}
               partiallyActive
            />
         </div>
      </div>
   )
}

export default TopBar
