require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
   siteMetadata: {
      configTitle:
         "Druk Wielkoformatowy - Flagi i Banery Reklamowe - Poznań | PrintXL",
      configDescription:
         "Oferujemy druk flag i banerów reklamowych oraz gotowe systemy, takie jak: ŚCIANKI, ROLLUPY, NAMIOTY, STANDY, TRYBUNKI, BEACHFLAGI. Wydruki w niskich cenach i najwyższej jakości.",
      configAuthor: "info@printxl.pl",
      configImg: "/favicon.png",
      configSiteUrl: "https://printxl.pl",
      siteUrl: "https://printxl.pl",
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
            host: "https://printxl.pl/",
            sitemap: "https://printxl.pl/sitemap.xml",
            policy: [{ userAgent: "*", allow: "/" }],
         },
      },
      {
         resolve: `gatsby-plugin-canonical-urls`,
         options: {
            siteUrl: `https://printxl.pl/`,
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
