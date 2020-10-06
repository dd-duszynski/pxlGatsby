import React from "react"
import styles from "./Materials.module.scss"
import SingleMaterial from "./SingleMaterial/SingleMaterial"

const Materials = ({ data }) => {
   return (
      <div className={styles.Materials}>
         {data.nodes.map(item => {
            return <SingleMaterial data={item} language="PL" />
         })}
      </div>
   )
}

export default Materials
