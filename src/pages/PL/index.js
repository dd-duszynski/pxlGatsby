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
      <Layout language="PL">
         <SEO
            title="Druk Wielkoformatowy - Flagi i Banery Reklamowe - Poznań | PrintXL"
            description="Oferujemy druk flag i banerów reklamowych oraz gotowe systemy, takie jak: ŚCIANKI, ROLLUPY, NAMIOTY, STANDY, TRYBUNKI, BEACHFLAGI. Wydruki w niskich cenach i najwyższej jakości."
            lang="pl"
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
      Produkty: allContentfulProduktyPl(
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
