import React, { useState } from "react"
import styles from "./FAQ.module.scss"
import Answer from "./Answer/Answer"
import LeftBar from "../UI/Bars/LeftBar"
import RightBar from "../UI/Bars/RightBar"

const textFAQ = [
   [
      "Jak złożyć zamówienie?",
      "To bardzo proste! Skontaktuj się ze swoim przedstawicielem, bądź wyślij e-mail na adres: info@printxl.pl, a odezwiemy się do Ciebie najszybciej jak to możliwe. Nasi specjaliści szybko i bezproblemowo przeprowadzą Cię przez cały proces zamówienia.",
   ],
   [
      "Jaka jest cena i termin realizacji?",
      "Wychodząc naprzeciw oczekiwaniom naszych klientów, każde zamówienie traktujemy  indywidualnie, dostosowując cenę do konkretnego przypadku. Zlecenia realizujemy szybko i sprawnie, w wyznaczonych przez klienta terminach, nawet do 48h!",
   ],
   [
      "Jakie są warunki płatności?",
      "Naszym minimalnym okresem płatności jest 14 dni, ale wychodząc naprzeciw potrzebom naszych klientów,  podczas realizacji większych zamówień, oferujemy korzystniejsze, spersonalizowane warunki (nawet do 30 dni na zapłatę faktury).",
   ],
   [
      "Jakie są opcje dostawy?",
      "Do Twojej dyspozycji oddajemy szeroką gamę usług kurierskich, realizujących dostawę w przeciągu 1-3 dni od daty wysyłki lub transport prywatny, dedykowany klientom łączącym większą liczbę zleceń lub realizujących duże kampanie. Twój opiekun z pewnością pomoże Ci w wyborze odpowiedniej opcji, łączącej zarówno wygodę dostawy, jak i korzystne warunki finansowe.",
   ],
   [
      "Jakie technologie druku stosujemy?",
      "Drukujemy w najnowocześniejszych technologiach - UV, Latex, Solvent oraz Sublimacji, korzystając z szerokiego asortymentu materiałów. Więcej informacji znajduje się w zakładce Technologie.",
   ],
   [
      "Jak poprawnie przygotować plik do druku?",
      "Szczegółowe instrukcje znajdziesz w zakładce Specyfikacje oraz na stronie każdego oferowanego przez nas produktu i wykończenia. Zapraszamy!",
   ],
   [
      "Jakie są warunki przyjęcia reklamacji?",
      "Wychodząc naprzeciw potrzebom naszych klientów, reklamacje i ewentualne kwestie sporne, rozpatrujemy na bieżąco. Szczegółowe informacje znajdują się w Warunkach Współpracy, gdzie precyzyjnie została opisana cała procedura zgłoszenia i proces rozpatrywania reklamacji.",
   ],
]

const FAQ = () => {
   const [expandedTab, setExpandedTab] = useState(null)

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
            {textFAQ.map(item => (
               <li className={styles.item} key={item[0]}>
                  <Answer
                     expanded={expandedTab === item[0]}
                     onToggle={onTabToggle}
                     question={item[0]}
                     answer={item[1]}
                  />
               </li>
            ))}
         </ul>
      </section>
   )
}

export default FAQ
