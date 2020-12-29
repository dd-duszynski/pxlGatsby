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

   return <Spinner />
}

export default App
