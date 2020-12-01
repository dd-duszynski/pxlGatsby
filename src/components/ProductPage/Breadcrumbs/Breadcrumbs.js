import React from "react"
import { Link } from "gatsby"
import { MdPlayArrow } from "react-icons/md"
import styles from "./Breadcrumbs.module.scss"

const Breadcrumbs = ({ textContent, rodzaj, nazwa, url }) => {
   let breadcrumb2, link2
   switch (rodzaj) {
      case "covid":
         breadcrumb2 = textContent.productPage.groupOfProducts[0]
         link2 = textContent.productPage.linkToGroupOfProducts[0]
         break
      case "banners":
         breadcrumb2 = textContent.productPage.groupOfProducts[1]
         link2 = textContent.productPage.linkToGroupOfProducts[1]
         break
      case "flags":
         breadcrumb2 = textContent.productPage.groupOfProducts[2]
         link2 = textContent.productPage.linkToGroupOfProducts[2]
         break
      case "rollups":
         breadcrumb2 = textContent.productPage.groupOfProducts[3]
         link2 = textContent.productPage.linkToGroupOfProducts[3]
         break
      case "walls":
         breadcrumb2 = textContent.productPage.groupOfProducts[4]
         link2 = textContent.productPage.linkToGroupOfProducts[4]
         break
      case "stands":
         breadcrumb2 = textContent.productPage.groupOfProducts[5]
         link2 = textContent.productPage.linkToGroupOfProducts[5]
         break
      case "tribunes":
         breadcrumb2 = textContent.productPage.groupOfProducts[6]
         link2 = textContent.productPage.linkToGroupOfProducts[6]
         break
      case "others":
         breadcrumb2 = textContent.productPage.groupOfProducts[7]
         link2 = textContent.productPage.linkToGroupOfProducts[7]
         break
      default:
         breadcrumb2 = textContent.productPage.groupOfProducts[7]
         link2 = textContent.productPage.linkToGroupOfProducts[7]
   }

   return (
      <div className={styles.breadcrumbs}>
         <Link 
            className={styles.link} 
            to={textContent.productPage.breadcrumbs[1]}
         >
            {textContent.productPage.breadcrumbs[0]}
         </Link>
         <MdPlayArrow className={styles.icon} />
         <Link 
            className={styles.link} 
            to={link2}
         >
            {breadcrumb2}
         </Link>
         <MdPlayArrow className={styles.icon} />
         <Link 
            className={styles.link} 
            to={url}
            
         >
            {nazwa}
         </Link>
      </div>
   )
}

export default Breadcrumbs
