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
      <Layout language="FR">
         <SEO
            title="Impression grand format - Drapeaux et bannières publicitaires - Poznań | PrintXL"
            description="Nous proposons l'impression de drapeaux et de bannières publicitaires ainsi que des systèmes prêts à l'emploi, tels que: MURS, ROLLUPES, TENTES, STANDS, STANDS, BEACHFLAGS. Impressions à bas prix et de la plus haute qualité."
            lang="fr"
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
      Produkty: allContentfulProduktyFr(
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
