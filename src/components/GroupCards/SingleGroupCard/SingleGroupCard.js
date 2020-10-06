import React from "react"
import { Link } from "gatsby"
import styles from "./SingleGroupCard.module.scss"
import flagImg from "../../../assets/images/Products/Flags/flags.jpg"
import covidImg from "../../../assets/images/Products/covid.jpg"
import bannerImg from "../../../assets/images/Products/Banner/banner.jpg"
import standImg from "../../../assets/images/Products/Stands/standy.jpg"
import trybImg from "../../../assets/images/Products/Tribunes/tribunes.jpg"
import othersImg from "../../../assets/images/Products/Others/others.jpg"
import wallsImg from "../../../assets/images/Products/Walls/walls.jpg"

import vinylsImg from "../../../assets/images/Materials/mesh.jpg"
import foilsImg from "../../../assets/images/Materials/fadh.jpg"
import flatImg from "../../../assets/images/Materials/pcv.jpg"
import decoImg from "../../../assets/images/Materials/ptfl.jpg"
import textilesImg from "../../../assets/images/Materials/flgMesh.jpg"

const SingleGroupCard = ({ title, description, url, id }) => {
   let image
   switch (id) {
      case "covid":
         image = covidImg
         break
      case "banners":
         image = bannerImg
         break
      case "stands":
         image = standImg
         break
      case "flags":
         image = flagImg
         break
      case "walls":
         image = wallsImg
         break
      case "tribunes":
         image = trybImg
         break
      case "others":
         image = othersImg
         break
      case "vinyls":
         image = vinylsImg
         break
      case "foils":
         image = foilsImg
         break
      case "flat":
         image = flatImg
         break
      case "deco":
         image = decoImg
         break
      case "textiles":
         image = textilesImg
         break
      default:
         image = flagImg
         break
   }

   return (
      <article className={styles.SingleGroupCard}>
         <img src={image} />
         <h1>{title}</h1>
         <div className={styles.line}/>
         <p>{description}</p>
         <Link to={`/${url}`} className={styles.link}>
            {`>`}
         </Link>
      </article>
   )
}

export default SingleGroupCard
