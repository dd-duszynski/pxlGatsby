import React, { useState, useContext } from "react"
import VisibilitySensor from "react-visibility-sensor"
import CountUp from "react-countup"
import styles from "./Counter.module.scss"
import Context from "../../../context/context"
import H2 from "../../UI/Headers/H2"

const style = {
   componentName: {},
   col: {},
   countup: {},
}

const Counter = () => {
   const [didViewCountUp, setDidViewCountUp] = useState(false)
   const { textContent } = useContext(Context)
   
   const onVisibilityChange = isVisible => {
      if (isVisible) {
         setDidViewCountUp(true)
      }
   }

   return (
      <article className={styles.counter}>
         <div className={styles.counter_container}>
            <div className={styles.box_item}>
               <H2 addClass={styles.box_title}>
                  {textContent.mainPage.aboutUs.counter[0]}
               </H2>
               <span className={styles.counter_boxes_span1} />
               <p className={styles.box_item_nr}>
                  <VisibilitySensor
                     onChange={onVisibilityChange}
                     offset={{
                        top: 100,
                     }}
                     delayedCall
                  >
                     <CountUp
                        className={styles.countup}
                        start={0}
                        end={didViewCountUp ? 133000 : 0}
                        duration={3}
                        separator={" "}
                     />
                  </VisibilitySensor>
               </p>
            </div>

            <div className={styles.box_item}>
               <H2 addClass={styles.box_title}>
                  {textContent.mainPage.aboutUs.counter[1]}
               </H2>
               <span className={styles.counter_boxes_span2} />
               <p className={styles.box_item_nr}>
                  <VisibilitySensor
                     onChange={onVisibilityChange}
                     offset={{
                        top: 100,
                     }}
                     delayedCall
                  >
                     <CountUp
                        className={style.countup}
                        start={0}
                        end={didViewCountUp ? 99 : 0}
                        duration={3}
                        suffix={" %"}
                        separator={" "}
                     />
                  </VisibilitySensor>
               </p>
            </div>

            <div className={styles.box_item}>
               <H2 addClass={styles.box_title}>
                  {textContent.mainPage.aboutUs.counter[2]}
               </H2>
               <span className={styles.counter_boxes_span3} />
               <p className={styles.box_item_nr}>
                  <VisibilitySensor
                     onChange={onVisibilityChange}
                     offset={{
                        top: 100,
                     }}
                     delayedCall
                  >
                     <CountUp
                        className={style.countup}
                        start={0}
                        end={didViewCountUp ? 4600000 : 0}
                        duration={3}
                        suffix={" m2"}
                        separator={" "}
                     />
                  </VisibilitySensor>
               </p>
            </div>
         </div>
      </article>
   )
}
export default Counter
