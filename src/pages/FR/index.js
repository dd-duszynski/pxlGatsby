import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import HeroVideo from "../../components/HeroVideo/HeroVideo"
import AboutUs from "../../components/AboutUs/AboutUs"
import News from "../../components/News/News"
import ContactContainer from "../../components/Contact/ContactContainer"
import FAQ from "../../components/FAQ/FAQ"
import MainPageProducts from "../../components/Products/MainPageProducts/MainPageProducts"

const IndexPage = () => {
   return (
      <Layout language="FR">
         <SEO title="PrintXL - Imprimerie numérique grand format - Pologne" />
         <HeroVideo />
         <AboutUs />
         <News />
         <MainPageProducts />
         <ContactContainer />
         <FAQ />
      </Layout>
   )
}

export default IndexPage
