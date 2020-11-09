import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import HeroVideo from "../../components/HeroVideo/HeroVideo"
import CoronaCatalog from "../../components/CoronaVirus/CoronaCatalog"
import ContactContainer from "../../components/Contact/ContactContainer"
import FAQ from "../../components/FAQ/FAQ"
import Products from "../../components/Products/Products"

const IndexPage = () => {
   return (
      <Layout language="EN">
         <SEO title="PL" />
         <HeroVideo language="PL" />
         <CoronaCatalog />
         <Products language="PL" />
         <ContactContainer language="PL" />
         <FAQ language="PL" />
      </Layout>
   )
}

export default IndexPage
