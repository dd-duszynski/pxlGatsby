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

const SEO = ({ lang, title, description }) => {
   const { site } = useStaticQuery(getData)
   const { configTitle, configDescription, configImg } = site.siteMetadata
   
   let langLogic = lang ? lang : "en" 
   let titleLogic = title ? title : configTitle
   let descriptionLogic = description ? description : configDescription

   return (
      <Helmet htmlAttributes={{ lang: langLogic }} title={titleLogic}>
         <meta name="description" content={descriptionLogic} />
         <meta name="image" content={configImg} />
      </Helmet>
   )
}

export default SEO