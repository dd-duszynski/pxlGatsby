import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Spinner from "../../components/UI/Spinner/Spinner"

const Technology = () => {
   useEffect(() => {
      navigate("/PL/technology/sublimation")
   }, [])
   return <Spinner />
}

export default Technology
