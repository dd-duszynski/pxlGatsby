import React, { useContext } from "react"
import Recaptcha from "react-recaptcha"
import Context from "../../../context/context"

const RecaptchaComponent = ({ verifyCallback }) => {
   const { language } = useContext(Context)

   const onloadCallback = function() {
      console.log("Recaptcha: onloadCallback")
   }

   return (
      <Recaptcha
         sitekey="6Lfj2mUaAAAAAIzoOrEeSBYJLMxXAzrTjULFGRoH"
         render="explicit"
         onloadCallback={onloadCallback}
         hl={language.toLowerCase()}
         verifyCallback={verifyCallback}
      />
   )
}

export default RecaptchaComponent
