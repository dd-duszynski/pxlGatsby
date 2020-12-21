import React, {useEffect} from "react"
import { navigate } from "gatsby"
import Spinner from "../../components/UI/Spinner/Spinner"

const Products = () => {
   useEffect(() => {
      navigate("/PL/products/banners")
   }, [])

   return (
      <Spinner/>
   )
}

export default Products
