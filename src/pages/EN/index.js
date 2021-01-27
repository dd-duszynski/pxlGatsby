import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import HeroVideo from "../../components/HeroVideo/HeroVideo"
import AboutUs from "../../components/AboutUs/AboutUs"
import News from "../../components/News/News"
import ContactContainer from "../../components/Contact/ContactContainer"
import FAQ from "../../components/FAQ/FAQ"
import MainPageProducts from "../../components/Products/MainPageProducts/MainPageProducts"

const IndexPage = ({ data }) => {
   return (
      <Layout language="EN">
         <SEO
            title="PrintXL - Digital Printing House - Poland"
            description="Digital large-format printing house in Poznań. We offer printing in the following technologies: Sublimation, Latex, UV, Solvent and ready-made advertising systems: Flags, Banners, Exhibition walls, Stands, Counters, Beachflags."
            lang="en"
         />
         <HeroVideo />
         <AboutUs />
         <News />
         <MainPageProducts data={data} />
         <ContactContainer />
         <FAQ />
      </Layout>
   )
}

export const query = graphql`
   query {
      Produkty: allContentfulProduktyEn(
         filter: { opcjeProduktu: { eq: "Strona Główna" } }
         limit: 12
      ) {
         nodes {
            nazwa
            zadruk
            opcjeProduktu
            opis {
               content {
                  content {
                     value
                  }
               }
            }
            opisKrotki
            rodzaj
            zdjecia {
               fixed(height: 200) {
                  ...GatsbyContentfulFixed
               }
            }
            url
         }
      }
   }
`

export default IndexPage
