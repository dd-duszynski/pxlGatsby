const Index = () => {
   const language = window.navigator.userLanguage || window.navigator.language
   const languageSubstring = language.substring(0, 2)
   const languageToUpperCase = languageSubstring.toUpperCase()

   switch (languageToUpperCase) {
      case "PL":
         window.location.href = "/PL"
         break
      case "FR":
         window.location.href = "/FR"
         break
      case "DE":
         window.location.href = "/DE"
         break
      default:
         window.location.href = "/EN"
   }
}

export default Index
