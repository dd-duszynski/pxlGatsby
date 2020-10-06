import React from "react"
import { Link } from "gatsby"
import styles from "./SingleGroupCard.module.scss"
import flagImg from "../../../../assets/images/Products/Flags/Thunder/Flags_Thunder.jpg"
import covidImg from "../../../../assets/images/Products/G.jpg"
import bannerImg from "../../../../assets/images/Products/Banner/Eyes/Banner_Eyes (1).jpg"
import standImg from "../../../../assets/images/Products/Stands/Totem2/Stands_Totem2 (1).jpg"
import trybImg from "../../../../assets/images/Products/Tribunes/PopUp2x1/Tribunes_PopUp2x1 (1).jpg"
import othersImg from "../../../../assets/images/Products/Others/Windbreak/Others_Windbreak.jpg"
import wallsImg from "../../../../assets/images/Products/Walls/PopUpArc/Walls_PopUpArc (1).jpg"

const SingleGroupCard = ({ title, description, url }) => {
   let image
   switch (title) {
      case "Covid-19":
         image = covidImg
         break
      case "Banery":
         image = bannerImg
         break
      case "Standy":
         image = standImg
         break
      case "Flagi":
         image = flagImg
         break
      case "Ścianki":
         image = wallsImg
         break
      case "Trybunki":
         image = trybImg
         break
      case "Pozostałe":
         image = othersImg
         break
      default:
         image = flagImg
         break
   }

   return (
      <article className={styles.SingleGroupCard}>
         <img src={image} alt={title}/>
         <h1>{title}</h1>
         <div className={styles.line}/>
         <p>{description}</p>
         <Link 
            to={`/${url}`} 
            className={styles.link}
         >
            {`>`}
         </Link>
      </article>
   )
}

export default SingleGroupCard
