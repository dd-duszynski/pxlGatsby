import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import ProductsNav from "../components/Products/ProductsNav/ProductsNav"
import ProductsList from "../components/Products/ProductsList/ProductsList"

const ProductsListTemplate = ({ data: { Produkty } }) => {
   // grupa do wyciągnięcia

   const { rodzaj } = Produkty.nodes[0]
   return (
      <Layout language="FR">
         <SEO title="PrintXL - Produkty" />
         <SEO
            title={`PrintXL - Produkte - ${rodzaj}`}
            description="PrintXL - Produits"
            lang="fr"
         />
         <ProductsNav />
         <ProductsList data={Produkty} />
      </Layout>
   )
}

export const getData = graphql`
   query($name: String!) {
      Produkty: allContentfulProduktyFr(
         sort: { fields: nazwa }
         filter: { rodzaj: { eq: $name } }
      ) {
         nodes {
            nazwa
            zadruk
            opcjeProduktu
            opisKrotki
            rodzaj
            url
            opis {
               content {
                  content {
                     value
                  }
               }
            }
            specyfikacje {
               file {
                  fileName
                  url
               }
            }
            zdjecia {
               fixed(height: 190) {
                  ...GatsbyContentfulFixed
               }
            }
         }
      }
   }
`
export default ProductsListTemplate
