import React, { useState, useEffect } from "react"
import styles from "./Materials.module.scss"
import SingleMaterial from "./SingleMaterial/SingleMaterial"
import Modal from "../Modal/Modal"

const Materials = ({ data }) => {
   const [isImgModalOpen, setImgModalOpen] = useState(false)

   const [currentImg, setCurrentImg] = useState(null)

   const switchImgModalVisibility = e => {
      setCurrentImg(e.target.src)
      isImgModalOpen === false ? setImgModalOpen(true) : setImgModalOpen(false)
   }

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <section className={styles.Materials}>
         <Modal
            type="img"
            isVisible={isImgModalOpen}
            switchModalVisibility={switchImgModalVisibility}
         >
            <img 
               className={styles.modalImg} 
               src={currentImg} 
               alt="" 
            />
         </Modal>
         {data.nodes.map(item => {
            return (
               <SingleMaterial
                  key={item.nazwa}
                  data={item}
                  onClick={e => switchImgModalVisibility(e)}
               />
            )
         })}
      </section>
   )
}

export default Materials
