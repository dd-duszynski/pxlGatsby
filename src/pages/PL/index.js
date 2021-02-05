import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import HeroVideo from "../../components/HeroVideo/HeroVideo"
import Hero from "../../components/Hero/Hero"
import AboutUs from "../../components/AboutUs/AboutUs"
import News from "../../components/News/News"
import ContactContainer from "../../components/Contact/ContactContainer"
import FAQ from "../../components/FAQ/FAQ"
import MainPageProducts from "../../components/Products/MainPageProducts/MainPageProducts"

const IndexPage = ({ data }) => {
   return (
      <Layout language="PL">
         <SEO
            title="PrintXL - Cyfrowa Drukarnia Wielkoformatowa - Poznań"
            description="Cyfrowa drukarnia wielkoformatowa w Poznaniu. Oferujemy druk w technologiach: Sublimacja, Latex, UV, Solwent oraz gotowe systemy reklamowe: Flagi, Banery, Ścianki wystawiennicze, Standy, Trybunki, Beachflagi."
            lang="pl"
         />
         <HeroVideo />
         <AboutUs />
         <News />
         <MainPageProducts data={data} />
         <ContactContainer />
         <FAQ />
         <Hero />
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
