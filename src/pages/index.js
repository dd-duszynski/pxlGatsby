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
            title="PrintXL - Cyfrowa Drukarnia Wielkoformatowa - Poznań"
            description="Cyfrowa drukarnia wielkoformatowa w Poznaniu. Oferujemy druk w technologiach: Sublimacja, Latex, UV, Solwent oraz gotowe systemy reklamowe: Flagi, Banery, Ścianki wystawiennicze, Standy, Trybunki, Beachflagi."
            lang="pl"
         />
         <Spinner />
      </div>
   )
}

export default IndexPage