import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import HeroVideo from "../../components/HeroVideo/HeroVideo"
import AboutUs from "../../components/AboutUs/AboutUs"
import CoronaCatalog from "../../components/CoronaVirus/CoronaCatalog"
import News from "../../components/News/News"
import ContactContainer from "../../components/Contact/ContactContainer"
import FAQ from "../../components/FAQ/FAQ"
import Products from "../../components/Products/Products"

const IndexPage = () => {
   return (
      <Layout language="PL">
         <SEO title="PrintXL - Cyfrowa Drukarnia Wielkoformatowa - Poznań" />
         <HeroVideo />
         <AboutUs />
         <News />
         {/* <CoronaCatalog /> */}
         <Products />
         <ContactContainer />
         <FAQ />
      </Layout>
   )
}

export default IndexPage
