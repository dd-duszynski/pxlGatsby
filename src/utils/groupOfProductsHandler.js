function groupOfProductsHandler(textContent, type) {
   let groupOfProducts
   switch (type) {
      //products
      case "banners":
         groupOfProducts = textContent.products.navigation.text[1]
         break
      case "flags":
         groupOfProducts = textContent.products.navigation.text[2]
         break
      case "rollups":
         groupOfProducts = textContent.products.navigation.text[3]
         break
      case "walls":
         groupOfProducts = textContent.products.navigation.text[4]
         break
      case "stands":
         groupOfProducts = textContent.products.navigation.text[5]
         break
      case "tribunes":
         groupOfProducts = textContent.products.navigation.text[6]
         break
      case "others":
         groupOfProducts = textContent.products.navigation.text[7]
         break
      case "covid":
         groupOfProducts = textContent.products.navigation.text[0]
         break
      // materials
      case "vinyls":
         groupOfProducts = textContent.materials.navigation.text[0]
         break
      case "foils":
         groupOfProducts = textContent.materials.navigation.text[1]
         break
      case "flat":
         groupOfProducts = textContent.materials.navigation.text[2]
         break
      case "decorative":
         groupOfProducts = textContent.materials.navigation.text[3]
         break
      case "textiles":
         groupOfProducts = textContent.materials.navigation.text[4]
         break
      default:
         groupOfProducts = textContent.products.navigation.text[1]
   }
   return groupOfProducts
}

export default groupOfProductsHandler
