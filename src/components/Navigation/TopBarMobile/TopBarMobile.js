import React from "react"
import { Link } from "gatsby"
import styles from "./TopBarMobile.module.scss"

const TopBarMobile = () => {
   const path = window.location.pathname.slice(3)

   return (
      <>
         <li className={styles.TopBarMobile_list}>
            <div className={styles.TopBarMobile_list_line} />
            <div className={styles.Navigation__phone}>
               <a href="tel:+48 695-859-808">
                  <span className={styles.phone} />
               </a>
               <a href="mailto:info@printxl.pl">
                  <span className={styles.mail} />
               </a>
            </div>
         </li>
         <li className={styles.TopBarMobile_li}>
            <div className={styles.Navigation__languages}>
               <Link
                  to={`/EN/${path}`}
                  className={styles.flagEN}
                  activeClassName={styles.flagEN_Active}
               />
               <Link
                  to={`/PL/${path}`}
                  className={styles.flagPL}
                  activeClassName={styles.flagPL_Active}
               />
               <Link
                  to="/DE"
                  className={styles.flagDE}
                  onClick={e => this.hideNavSlide(e)}
                  activeClassName={styles.flagDE_Active}
               />
               <Link
                  to="/FR"
                  className={styles.flagFR}
                  onClick={e => this.hideNavSlide(e)}
                  activeClassName={styles.flagFR_Active}
               />
            </div>
         </li>
      </>
   )
}

export default TopBarMobile
