import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Spinner from "../UI/Spinner/Spinner"

const App = () => {
   useEffect(() => {
      const language =
         window.navigator.userLanguage || window.navigator.language
      const languageSubstring = language.substring(0, 2)
      const languageToUpperCase = languageSubstring.toUpperCase()
      switch (languageToUpperCase) {
         case "PL":
            navigate("/PL/")
            // window.location.href = "/PL"
            break
         case "FR":
            navigate("/FR/")
            // window.location.href = "/FR"
            break
         case "DE":
            navigate("/DE/")
            // window.location.href = "/DE"
            break
         default:
            navigate("/EN/")
         // window.location.href = "/EN"
      }
   }, [])

   return (
      <Spinner/>
   )
}

export default App