const path = require("path")

const createPages = async ({ graphql, actions }) => {
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
         productsDE: allContentfulProduktyDe {
            edges {
               node {
                  nazwa
                  rodzaj
                  url
               }
            }
         }
         productsFR: allContentfulProduktyFr {
            edges {
               node {
                  nazwa
                  rodzaj
                  url
               }
            }
         }
         blogPL: allContentfulBlogPl {
            edges {
               node {
                  tytul
               }
            }
         }
         blogCategoryPL: allContentfulBlogPl {
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
         materialsFR: allContentfulMaterialyFr {
            edges {
               node {
                  rodzaj
               }
            }
         }
         materialsDE: allContentfulMaterialyDe {
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
         technologiesDE: allContentfulTechnologieDe {
            edges {
               node {
                  url
               }
            }
         }
         technologiesFR: allContentfulTechnologieFr {
            edges {
               node {
                  url
               }
            }
         }
      }
   `)

   //Lista Produktów --------------------------------------- 
   //PL 
   data.productsPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/products/${node.rodzaj}`,
         component: path.resolve("./src/templates/ProductsList-template-PL.js"),
         context: {
            name: node.rodzaj,
         },
      })
   })
   // EN 
   data.productsEN.edges.forEach(({ node }) => {
      createPage({
         path: `EN/products/${node.rodzaj}`,
         component: path.resolve("./src/templates/ProductsList-template-EN.js"),
         context: {
            name: node.rodzaj,
         },
      })
   })
   // DE
   data.productsDE.edges.forEach(({ node }) => {
      createPage({
         path: `DE/products/${node.rodzaj}`,
         component: path.resolve("./src/templates/ProductsList-template-DE.js"),
         context: {
            name: node.rodzaj,
         },
      })
   })
   // FR
   data.productsFR.edges.forEach(({ node }) => {
      createPage({
         path: `FR/products/${node.rodzaj}`,
         component: path.resolve("./src/templates/ProductsList-template-FR.js"),
         context: {
            name: node.rodzaj,
         },
      })
   })

   //Lista Specyfikacji ------------------------------------- 
   //PL 
   data.productsPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/specifications/${node.rodzaj}`,
         component: path.resolve(
            "./src/templates/Specifications-template-PL.js"
         ),
         context: {
            name: node.rodzaj,
         },
      })
   })
   //EN 
   data.productsEN.edges.forEach(({ node }) => {
      createPage({
         path: `EN/specifications/${node.rodzaj}`,
         component: path.resolve(
            "./src/templates/Specifications-template-EN.js"
         ),
         context: {
            name: node.rodzaj,
         },
      })
   })
   //DE
   data.productsDE.edges.forEach(({ node }) => {
      createPage({
         path: `DE/specifications/${node.rodzaj}`,
         component: path.resolve(
            "./src/templates/Specifications-template-DE.js"
         ),
         context: {
            name: node.rodzaj,
         },
      })
   })
   //FR
   data.productsFR.edges.forEach(({ node }) => {
      createPage({
         path: `FR/specifications/${node.rodzaj}`,
         component: path.resolve(
            "./src/templates/Specifications-template-FR.js"
         ),
         context: {
            name: node.rodzaj,
         },
      })
   })

   //Strona Pojedynczego Produktu ----------------------------
   //PL 
   data.productsPL.edges.forEach(({ node }) => {
      createPage({
         path: `${node.url}`,
         component: path.resolve("./src/templates/ProductPage-template-PL.js"),
         context: {
            name: node.nazwa,
         },
      })
   })
   //EN
   data.productsEN.edges.forEach(({ node }) => {
      createPage({
         path: `${node.url}`,
         component: path.resolve("./src/templates/ProductPage-template-EN.js"),
         context: {
            name: node.nazwa,
         },
      })
   })
   //DE
   data.productsDE.edges.forEach(({ node }) => {
      createPage({
         path: `${node.url}`,
         component: path.resolve("./src/templates/ProductPage-template-DE.js"),
         context: {
            name: node.nazwa,
         },
      })
   })
   //FR
   data.productsFR.edges.forEach(({ node }) => {
      createPage({
         path: `${node.url}`,
         component: path.resolve("./src/templates/ProductPage-template-FR.js"),
         context: {
            name: node.nazwa,
         },
      })
   })

   // BlogPost Page ----------------------------
   // PL 
   data.blogPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/blog/${node.tytul}`,
         component: path.resolve("./src/templates/BlogPost-template-PL.js"),
         context: {
            name: node.tytul,
         },
      })
   })

   // Blog Kategorie  ----------------------------
   // PL 
   data.blogCategoryPL.distinct.forEach(node => {
      createPage({
         path: `PL/blog/${node}`,
         component: path.resolve("./src/templates/BlogCategory-template-PL.js"),
         context: {
            category: node,
         },
      })
   })
   // Materiały  ----------------------------
   // PL 
   data.materialsPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/materials/${node.rodzaj}`,
         component: path.resolve("./src/templates/Materials-template-PL.js"),
         context: {
            materialType: node.rodzaj,
         },
      })
   })
   // EN 
   data.materialsEN.edges.forEach(({ node }) => {
      createPage({
         path: `EN/materials/${node.rodzaj}`,
         component: path.resolve("./src/templates/Materials-template-EN.js"),
         context: {
            materialType: node.rodzaj,
         },
      })
   })
   // FR 
   data.materialsFR.edges.forEach(({ node }) => {
      createPage({
         path: `FR/materials/${node.rodzaj}`,
         component: path.resolve("./src/templates/Materials-template-FR.js"),
         context: {
            materialType: node.rodzaj,
         },
      })
   })
   // DE 
   data.materialsDE.edges.forEach(({ node }) => {
      createPage({
         path: `DE/materials/${node.rodzaj}`,
         component: path.resolve("./src/templates/Materials-template-DE.js"),
         context: {
            materialType: node.rodzaj,
         },
      })
   })

   // Technologie/Maszyny --------------------------------------- 
   // PL 
   data.technologiesPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/technology/${node.url}`,
         component: path.resolve("./src/templates/Technology-template-PL.js"),
         context: {
            name: node.url,
         },
      })
   })
   // EN 
   data.technologiesEN.edges.forEach(({ node }) => {
      createPage({
         path: `EN/technology/${node.url}`,
         component: path.resolve("./src/templates/Technology-template-EN.js"),
         context: {
            name: node.url,
         },
      })
   })
   // DE 
   data.technologiesDE.edges.forEach(({ node }) => {
      createPage({
         path: `DE/technology/${node.url}`,
         component: path.resolve("./src/templates/Technology-template-DE.js"),
         context: {
            name: node.url,
         },
      })
   })
   // FR 
   data.technologiesFR.edges.forEach(({ node }) => {
      createPage({
         path: `FR/technology/${node.url}`,
         component: path.resolve("./src/templates/Technology-template-FR.js"),
         context: {
            name: node.url,
         },
      })
   })
}

const onCreateWebpackConfig = ({ stage, loaders, actions }) => {
   if (stage === "build-html") {
      actions.setWebpackConfig({
         module: {
            rules: [
               {
                  test: /bad-module/,
                  use: loaders.null(),
               },
            ],
         },
      })
   }
}

exports.createPages = createPages
exports.onCreateWebpackConfig = onCreateWebpackConfig