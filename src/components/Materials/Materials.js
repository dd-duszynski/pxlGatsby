import React, { useEffect } from "react"
import styles from "./Materials.module.scss"
import SingleMaterial from "./SingleMaterial/SingleMaterial"

const Materials = ({ data }) => {
   
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <section className={styles.Materials}>
         {data.nodes.map(item => {
            return <SingleMaterial data={item} language="PL" key={item.nazwa} />
         })}
      </section>
   )
}

export default Materials
