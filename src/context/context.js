import React from "react"

const LanguageContext = React.createContext({
   language: null,
   switchLanguage: () => {},
})

export default LanguageContext
