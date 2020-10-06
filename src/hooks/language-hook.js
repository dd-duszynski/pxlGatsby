import { useState, useEffect } from "react"
import { GeneralPL } from "../content/GeneralPL"
import { GeneralEN } from "../content/GeneralEN"
import { GeneralDE } from "../content/GeneralDE"
import { GeneralFR } from "../content/GeneralFR"

function useLanguage(lang) {
   const [language, setLanguage] = useState(null)
   useEffect(() => {
      switch (lang) {
         case "PL":
            setLanguage(GeneralPL)
            break
         case "EN":
            setLanguage(GeneralEN)
            break
         case "DE":
            setLanguage(GeneralDE)
            break
         case "FR":
            setLanguage(GeneralFR)
            break
         default:
            setLanguage(GeneralEN)
            break
      }
   }, [lang])
   return language
}

export { useLanguage }
