import React, { useState, useContext } from "react"
import Context from '../../context/context'
import styles from "./FAQ.module.scss"
import Answer from "./Answer/Answer"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"

const FAQ = () => {
   const [expandedTab, setExpandedTab] = useState(null)
   const { textContent } = useContext(Context)
   const onTabToggle = tabId => {
      if (tabId === expandedTab) {
         setExpandedTab(null)
      } else {
         setExpandedTab(tabId)
      }
   }
   
   return (
      <section className={styles.FAQ} id="FAQ">
         <LeftBar text="FAQ" />
         <RightBar />
         <ul className={styles.list}>
            {textContent.mainPage.faq.map(item => (
               <Answer
                  expanded={expandedTab === item[0]}
                  onToggle={onTabToggle}
                  question={item[0]}
                  answer={item[1]}
                  key={item[0]}
               />
            ))}
         </ul>
      </section>
   )
}

export default FAQ
