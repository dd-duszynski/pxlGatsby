import React from "react"
import styles from "./Tag.module.scss"
import ReactTooltip from "react-tooltip"
import sun from "../../../../static/sun.svg"
import noSun from "../../../../static/noSun.svg"
import noWater from "../../../../static/noWater.svg"
import noFire from "../../../../static/noFire.svg"

const Tag = ({ type, text, tooltip, noTooltip }) => {
   let css, icon
   switch (type) {
      case "best":
         css = styles.red
         break
      case "news":
         css = styles.red
         break
      case "inOut":
         css = styles.green
         break
      case "printing":
         css = styles.blue
         break
      case "backlight":
         css = styles.yellow
         icon = <img src={sun} alt={text} />
         break
      case "stoplight":
         css = styles.black
         icon = <img src={noSun} alt={text} />
         break
      case "nonFlammable":
         css = styles.red
         icon = <img src={noFire} alt={text} />
         break
      case "waterproof":
         css = styles.cyan
         icon = <img src={noWater} alt={text} />
         break
      // blog ---------------
      case "blogPrinting":
         css = styles.blue
         break
      case "blogDTP":
         css = styles.orange
         break
      case "blogProduct":
         css = styles.green
         break
      case "blogTechnology":
         css = styles.gray
         break
      case "blogAll":
         css = styles.blueOutline
         break
      default:
         css = styles.blue
   }
   const linkCSS = noTooltip ? styles.link : null
   return (
      <div className={[styles.Tag, css, linkCSS].join(" ")}>
         {icon ? (
            <div className={styles.icon} data-tip data-for={tooltip}>
               {icon}
            </div>
         ) : (
               <span className={styles.tagText} data-tip data-for={tooltip}>
                  {text}
               </span>
            )}
         {noTooltip ? null : (
            <ReactTooltip
               id={tooltip}
               place="bottom"
               type="dark"
               effect="solid"
               offset={{ top: -2 }}
               className={styles.tooltip}
            >
               <span>{tooltip}</span>
            </ReactTooltip>
         )}
      </div>
   )
}

export default Tag
