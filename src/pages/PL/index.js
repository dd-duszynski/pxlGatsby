import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import HeroVideo from "../../components/HeroVideo/HeroVideo"
import HeroMainPage from "../../components/HeroMainPage/HeroMainPage"
import CoronaCatalog from "../../components/CoronaVirus/CoronaCatalog"
import ContactContainer from "../../components/Contact/ContactContainer"
import FAQ from "../../components/FAQ/FAQ"
import Products from "../../components/Products/Products"

const IndexPage = () => {
   return (
      <Layout language="PL">
         <SEO title="PL" />
         <HeroVideo language="PL" />
         <HeroMainPage />
         <CoronaCatalog />
         <Products language="PL" />
         <ContactContainer  />
         <FAQ language="PL" />
      </Layout>
   )
}

export default IndexPage
