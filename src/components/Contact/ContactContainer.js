import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Context from "../../context/context"
import styles from "./ContactContainer.module.scss"
import ContactForm from "./ContactForm/ContactForm"
import ContactInfo from "./ContactInfo/ContactInfo"
import Newsletter from "./Newsletter/Newsletter"
import BoxHeader from "../UI/BoxHeader/BoxHeader"

const Contact = () => {
   const { textContent } = useContext(Context)
   const { contentfulAsset } = useStaticQuery(query)
   return (
      <section
         className={styles.Contact}
         id="contact"
         style={{ backgroundImage: `url(${contentfulAsset.fluid.src})` }}
      >
         <div className={styles.container}>
            <BoxHeader text={textContent.mainPage.contact.header} />
            <ContactInfo text={textContent.mainPage.contact} />
            <div className={styles.line} />
            <ContactForm text={textContent.mainPage.contact.text} />
         </div>
         <Newsletter text={textContent.mainPage.contact.text} />
      </section>
   )
}

const query = graphql`
   {
      contentfulAsset(title: { eq: "contactImg" }) {
         fluid(maxWidth: 1920) {
            ...GatsbyContentfulFluid
         }
      }
   }
`

export default Contact
