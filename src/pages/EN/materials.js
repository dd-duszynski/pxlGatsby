import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Spinner from "../../components/UI/Spinner/Spinner"

const Materials = () => {
   useEffect(() => {
      navigate("/EN/materials/vinyls")
   }, [])

   return (
      <Spinner/>
   )
}

export default Materials
