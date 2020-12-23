import React from "react"
import Breadcrumbs from '../../UI/Breadcrumbs/Breadcrumbs'

const BreadcrumbsContainer = ({ text, rodzaj, nazwa, url }) => {
   let breadcrumb2, link2
   switch (rodzaj) {
      case "covid":
         breadcrumb2 = text.groupOfProducts[0]
         link2 = text.linkToGroupOfProducts[0]
         break
      case "banners":
         breadcrumb2 = text.groupOfProducts[1]
         link2 = text.linkToGroupOfProducts[1]
         break
      case "flags":
         breadcrumb2 = text.groupOfProducts[2]
         link2 = text.linkToGroupOfProducts[2]
         break
      case "rollups":
         breadcrumb2 = text.groupOfProducts[3]
         link2 = text.linkToGroupOfProducts[3]
         break
      case "walls":
         breadcrumb2 = text.groupOfProducts[4]
         link2 = text.linkToGroupOfProducts[4]
         break
      case "stands":
         breadcrumb2 = text.groupOfProducts[5]
         link2 = text.linkToGroupOfProducts[5]
         break
      case "tribunes":
         breadcrumb2 = text.groupOfProducts[6]
         link2 = text.linkToGroupOfProducts[6]
         break
      case "others":
         breadcrumb2 = text.groupOfProducts[7]
         link2 = text.linkToGroupOfProducts[7]
         break
      default:
         breadcrumb2 = text.groupOfProducts[7]
         link2 = text.linkToGroupOfProducts[7]
   }

   return (
      <Breadcrumbs
         b1={[text.breadcrumbs[0], text.breadcrumbs[1]]}
         b2={[link2, breadcrumb2]}
         b3={[url, nazwa]}
      />
   )
}

export default BreadcrumbsContainer
