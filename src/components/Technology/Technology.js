import React, { Component } from "react"
import styles from "./Technology.module.scss"
import Machines from "./Machines/Machines"
import { TechnologyPL } from "../../content/Technology"
import { TechnologyEN } from "../../content/Technology"
import { TechnologyFR } from "../../content/Technology"
import { TechnologyDE } from "../../content/Technology"
import TechnologyNav from "./TechnologyNav/TechnologyNav"

class Technology extends Component {
   componentDidMount() {
      window.scrollTo(0, 0)
   }

   renderTechnology(language) {
      return language.map(item => (
         <Machines
            name={item.name}
            description={item.description}
            description2={item.description2}
            img={item.img}
            eco={item.eco}
            key={item.name}
         />
      ))
   }

   render() {
      const { language } = this.props
      return (
         <>
            <TechnologyNav />
            <div className={styles.technology}>
               {language === "PL" && this.renderTechnology(TechnologyPL)}
               {language === "EN" && this.renderTechnology(TechnologyEN)}
               {language === "DE" && this.renderTechnology(TechnologyDE)}
               {language === "FR" && this.renderTechnology(TechnologyFR)}
            </div>
         </>
      )
   }
}

export default Technology
