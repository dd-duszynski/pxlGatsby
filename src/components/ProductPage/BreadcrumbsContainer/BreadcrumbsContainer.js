import React, { useContext } from "react"
import Context from "../../../context/context"
import Breadcrumbs from "../../UI/Breadcrumbs/Breadcrumbs"

const BreadcrumbsContainer = ({ rodzaj, nazwa, url }) => {
   const { textContent } = useContext(Context)
   let breadcrumb2, link2
   switch (rodzaj) {
      case "covid":
         breadcrumb2 = textContent.products.navigation.text[0]
         link2 = textContent.products.navigation.links[0]
         break
      case "banners":
         breadcrumb2 = textContent.products.navigation.text[1]
         link2 = textContent.products.navigation.links[1]
         break
      case "flags":
         breadcrumb2 = textContent.products.navigation.text[2]
         link2 = textContent.products.navigation.links[2]
         break
      case "rollups":
         breadcrumb2 = textContent.products.navigation.text[3]
         link2 = textContent.products.navigation.links[3]
         break
      case "walls":
         breadcrumb2 = textContent.products.navigation.text[4]
         link2 = textContent.products.navigation.links[4]
         break
      case "stands":
         breadcrumb2 = textContent.products.navigation.text[5]
         link2 = textContent.products.navigation.links[5]
         break
      case "tribunes":
         breadcrumb2 = textContent.products.navigation.text[6]
         link2 = textContent.products.navigation.links[6]
         break
      case "others":
         breadcrumb2 = textContent.products.navigation.text[7]
         link2 = textContent.products.navigation.links[7]
         break
      default:
         breadcrumb2 = textContent.products.navigation.text[7]
         link2 = textContent.products.navigation.links[7]
   }

   return (
      <Breadcrumbs
         b1={[textContent.productPage.breadcrumbs[0], textContent.productPage.breadcrumbs[1]]}
         b2={[link2, breadcrumb2]}
         b3={[url, nazwa]}
      />
   )
}

export default BreadcrumbsContainer
