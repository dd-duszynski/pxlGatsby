const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions
   const { data } = await graphql(`
      query {
         productsPL: allContentfulProduktyPl {
            edges {
               node {
                  nazwa
                  rodzaj
                  url
               }
            }
         }
         productsEN: allContentfulProduktyEn {
            edges {
               node {
                  nazwa
                  rodzaj
                  url
               }
            }
         }
         postyPL: allContentfulBlogPl {
            edges {
               node {
                  tytul
               }
            }
         }
         postyEN: allContentfulBlogEn {
            edges {
               node {
                  tytul
               }
            }
         }

         kategoriePL: allContentfulBlogPl {
            distinct(field: kategorie)
         }

         materialsPL: allContentfulMaterialyPl {
            edges {
               node {
                  rodzaj
               }
            }
         }
         materialsEN: allContentfulMaterialyEn {
            edges {
               node {
                  rodzaj
               }
            }
         }
         technologiesPL: allContentfulTechnologiePl {
            edges {
               node {
                  url
               }
            }
         }
         technologiesEN: allContentfulTechnologieEn {
            edges {
               node {
                  url
               }
            }
         }
      }
   `)

   //Lista Produktów PL ---------------------------------------
   data.productsPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/products/${node.rodzaj}`,
         component: path.resolve("./src/templates/ProductsList-template-PL.js"),
         context: {
            name: node.rodzaj,
         },
      })
   })
   //Lista Produktów EN
   data.productsEN.edges.forEach(({ node }) => {
      createPage({
         path: `EN/products/${node.rodzaj}`,
         component: path.resolve("./src/templates/ProductsList-template-EN.js"),
         context: {
            name: node.rodzaj,
         },
      })
   })
   //Strona Pojedynczego Produktu PL ---------------------------------------
   data.productsPL.edges.forEach(({ node }) => {
      createPage({
         path: `${node.url}`,
         component: path.resolve("./src/templates/ProductPage-template-PL.js"),
         context: {
            name: node.nazwa,
         },
      })
   })

   //Strona Pojedynczego Produktu EN
   data.productsEN.edges.forEach(({ node }) => {
      createPage({
         path: `${node.url}`,
         component: path.resolve("./src/templates/ProductPage-template-EN.js"),
         context: {
            name: node.nazwa,
         },
      })
   })

   // Blog PL ---------------------------------------
   data.postyPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/blog/${node.tytul}`,
         component: path.resolve("./src/templates/Blog-template-PL.js"),
         context: {
            name: node.tytul,
         },
      })
   })

   // Blog TEST Kategorii 
   data.kategoriePL.distinct.forEach((node) => {
      createPage({
         path: `PL/blog/${node}`,
         component: path.resolve("./src/templates/BlogCategory-template-PL.js"),
         context: {
            cat: node,
         },
      })
   })

   // Materiały PL -------
   data.materialsPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/materials/${node.rodzaj}`,
         component: path.resolve("./src/templates/Materials-template-PL.js"),
         context: {
            name: node.rodzaj,
         },
      })
   })
   
   // Materiały EN
   data.materialsEN.edges.forEach(({ node }) => {
      createPage({
         path: `EN/materials/${node.rodzaj}`,
         component: path.resolve("./src/templates/Materials-template-EN.js"),
         context: {
            name: node.rodzaj,
         },
      })
   })

   // Technologie PL ---------------------------------------
   data.technologiesPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/technology/${node.url}`,
         component: path.resolve("./src/templates/Technology-template-PL.js"),
         context: {
            name: node.url,
         },
      })
   })
   //Technologie EN
   data.technologiesEN.edges.forEach(({ node }) => {
      createPage({
         path: `EN/technology/${node.url}`,
         component: path.resolve("./src/templates/Technology-template-EN.js"),
         context: {
            name: node.url,
         },
      })
   })
}
