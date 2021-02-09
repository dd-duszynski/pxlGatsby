import React from "react"
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
            title="PrintXL - Imprimerie numérique grand format - Pologne"
            description="Imprimerie numérique grand format à Poznań. Nous proposons des impressions dans les technologies suivantes: Sublimation, Latex, UV, Solvant et systèmes publicitaires prêts à l'emploi: Drapeaux, Bannières, Murs d'exposition, Stands, Comptoirs, Beachflags."
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
         limit: 6
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
