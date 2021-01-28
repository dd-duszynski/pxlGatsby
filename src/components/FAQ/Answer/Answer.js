import React, { useState } from "react"
import styles from "./Answer.module.scss"
import { RiArrowDownSLine } from "react-icons/ri"
import H2 from "../../UI/Headers/H2"
import Paragraph from "../../UI/Paragraph/Paragraph"

const AnswerContent = ({ which }) =>
   which && <Paragraph>{which[1]}</Paragraph>

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
   const listItemCSS = expanded ? styles.AnswerExpanded : styles.Answer
   
   return (
      <li className={listItemCSS} >
         <H2 addClass={styles.titleContainer} onClick={() => toogleResults()}>
            {question}
            <RiArrowDownSLine className={arrowCSS} />
         </H2>
         {expanded === true && renderResults()}
      </li>
   )
}

export default Answer
