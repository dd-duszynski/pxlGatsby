import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
   {
      site {
         siteMetadata {
            configTitle
            configDescription
            configAuthor
            configData
            configTwitterUserName
            configImg
            configSiteUrl
         }
      }
   }
`

const SEO = ({ title, description }) => {
   const { site } = useStaticQuery(getData)
   const { configTitle, configDescription, configImg } = site.siteMetadata

   let titleLogic = title ? title : configTitle
   let descriptionLogic = description ? description : configDescription

   return (
      <Helmet htmlAttributes={{ lang: "pl" }} title={titleLogic}>
         <meta name="description" content={descriptionLogic} />
         <meta name="image" content={configImg} />
      </Helmet>
   )
}

export default SEO