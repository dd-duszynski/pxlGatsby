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
         technologiesPL: allContentfulTechnologiePl {
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
   //Lista Specyfikacji PL -------------------------------------
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
   // Blog PL ------
   data.blogPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/blog/${node.tytul}`,
         component: path.resolve("./src/templates/BlogPost-template-PL.js"),
         context: {
            name: node.tytul,
         },
      })
   })
   // Blog Kategorie PL ------
   data.blogCategoryPL.distinct.forEach(node => {
      createPage({
         path: `PL/blog/${node}`,
         component: path.resolve("./src/templates/BlogCategory-template-PL.js"),
         context: {
            category: node,
         },
      })
   })
   // Materiały PL -------
   data.materialsPL.edges.forEach(({ node }) => {
      createPage({
         path: `PL/materials/${node.rodzaj}`,
         component: path.resolve("./src/templates/Materials-template-PL.js"),
         context: {
            materialType: node.rodzaj,
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