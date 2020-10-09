import React, { useState } from "react"
import styles from "./Answer.module.scss"
import { RiArrowDownSLine } from "react-icons/ri"

const AnswerContent = ({ which }) =>
   which && <p className={styles.content}>{which[1]}</p>

const Answer = ({ expanded, onToggle, question, answer }) => {
   const [results, setResults] = useState(null)

   const toogleResults = () => {
      onToggle(question)
      setResults([question, answer])
   }

   const renderResults = () => {
      return <AnswerContent which={results} />
   }

   const arrowCSS = expanded ? styles.arrowRotate : styles.arrow
   const listItemCSS = expanded ? styles.listItemExpanded : styles.listItem
   return (
      <li className={listItemCSS} onClick={() => toogleResults()}>
         <h3 className={styles.title}>
            {question}
            <RiArrowDownSLine className={arrowCSS} />
         </h3>
         {expanded === true && renderResults()}
      </li>
   )
}

export default Answer
