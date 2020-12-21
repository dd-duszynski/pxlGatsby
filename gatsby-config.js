require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
   siteMetadata: {
      configTitle: "PrintXL - Drukarnia Wielkoformatowa - Poznań",
      configDescription:
         "Drukarnia wielkoformatowa w Poznaniu. Oferujemy druk w technologiach: Sublimacja, Latex, UV, Solwent oraz gotowe systemy reklamowe: Flagi, Banery, Ścianki wystawiennicze, Standy, Trybunki, Beachflagi.",
      configAuthor: "dd.duszynski@gmail.com",
      configData: ["item1", "item2"],
      configTwitterUserName: "dd.duszynski",
      configImg: "/favicon.png",
      configSiteUrl: "printxl.pl",
      siteUrl: "http://localhost:8000/"
   },
   plugins: [
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `assets`,
            path: `${__dirname}/src/assets/`,
         },
      },
      {
         resolve: `gatsby-source-contentful`,
         options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
         },
      },
      {
         resolve: 'gatsby-plugin-robots-txt',
         options: {
           host: 'http://localhost:8000/',
           sitemap: 'http://localhost:8000/sitemap.xml',
           policy: [{ userAgent: '*', allow: '/' }]
         }
       },
      `gatsby-plugin-sitemap`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-transition-link`,
      `gatsby-plugin-playground`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-client-side-redirect`
   ],
}
