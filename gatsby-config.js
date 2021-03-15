require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
   siteMetadata: {
      configTitle: "PrintXL - Drukarnia Wielkoformatowa - Poznań",
      configDescription:
         "Drukarnia wielkoformatowa w Poznaniu. Oferujemy druk w technologiach: Sublimacja, Latex, UV, Solwent oraz gotowe systemy reklamowe: Flagi, Banery, Ścianki wystawiennicze, Standy, Trybunki, Beachflagi.",
      configAuthor: "info@printxl.pl",
      configImg: "/favicon.png",
      configSiteUrl: "http://printxl.pl",
      siteUrl: "http://printxl.pl",
   },
   plugins: [
      {
         resolve: `gatsby-plugin-recaptcha`,
         options: {
            async: false,
            defer: false,
            args: `?onload=onloadCallback&render=explicit`,
         },
      },
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            trackingId: "UA-160634306-1",
            head: false,
            exclude: ["/preview/**", "/do-not-track/me/too/"],
            pageTransitionDelay: 0,
         },
      },
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
         resolve: "gatsby-plugin-robots-txt",
         options: {
            host: "http://localhost:8000/",
            sitemap: "http://localhost:8000/sitemap.xml",
            policy: [{ userAgent: "*", allow: "/" }],
         },
      },
      `gatsby-plugin-sitemap`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-transition-link`,
      `gatsby-plugin-playground`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-client-side-redirect`,
   ],
}
