import React, { useEffect } from "react"
import { navigate } from "gatsby"
import SEO from "../components/SEO/SEO"
import Spinner from "../components/UI/Spinner/Spinner"

const IndexPage = () => {
   useEffect(() => {
      const language =
         window.navigator.userLanguage || window.navigator.language
      const languageSubstring = language.substring(0, 2)
      const languageToUpperCase = languageSubstring.toUpperCase()
      switch (languageToUpperCase) {
         case "PL":
            navigate("/PL/")
            break
         case "FR":
            navigate("/FR/")
            break
         case "DE":
            navigate("/DE/")
            break
         default:
            navigate("/EN/")
      }
   }, [])

   return (
      <div>
         <SEO
            title="Druk Wielkoformatowy - Banery Reklamowe - Poznań | PrintXL"
            description="Oferujemy druk flag i banerów reklamowych oraz gotowe systemy, takie jak: ŚCIANKI, ROLLUPY, NAMIOTY, STANDY, TRYBUNKI, BEACHFLAGI. Wydruki w niskich cenach i najwyższej jakości."
            lang="pl"
         />
         <Spinner />
      </div>
   )
}

export default IndexPage
