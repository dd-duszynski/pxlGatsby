import React from "react"


const LanguageContext = React.createContext({
   language: null,
   switchLanguage: () => {},
   isModalOpen: false,
   switchModalVisibility: () => {},
})

export default LanguageContext
