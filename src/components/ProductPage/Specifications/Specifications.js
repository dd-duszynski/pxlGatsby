import React, { useState, useEffect } from "react"
import styles from "./Specifications.module.scss"
import { AiOutlineFilePdf } from "react-icons/ai"

const Specifications = ({ specyfikacje }) => {
   const [link, setLink] = useState("")

   const handleChange = event => {
      setLink(event.target["value"])
   }

   const setFirstState = () => {
      setLink(specyfikacje[0].file.url)
   }

   useEffect(() => {
      setFirstState()
   }, [])

   const lessThanXSpecification = (
      <>
         {specyfikacje.map(item => (
            <div className={styles.iconContainer}>
               <AiOutlineFilePdf className={styles.icon} />
               <a
                  className={styles.link}
                  href={item.file.url}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  {item.title}
               </a>
            </div>
         ))}
      </>
   )
   
   const moreThanXSpecification = (
      <form className={styles.selectContainer}>
         <select onChange={e => handleChange(e)} className={styles.select}>
            {specyfikacje.map(item => (
               <option value={item.file.url} key={item.title}>
                  {item.title}
               </option>
            ))}
         </select>
         <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.select_link}
         >
            Pobierz
         </a>
      </form>
   )

   return (
      <div className={styles.Specifications}>
         {specyfikacje.length > 8
            ? moreThanXSpecification
            : lessThanXSpecification}
      </div>
   )
}

export default Specifications