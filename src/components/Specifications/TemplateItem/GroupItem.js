import React from "react"
import styles from "./GroupItem.module.scss"
import { RiArrowDownSLine } from "react-icons/ri"
import H2 from "../../UI/Headers/H2"
import ProductItem from './ProductItem';

const GroupItem = ({ text, id, clickFnc, choosen,products, setProductHandler,productId }) => {
   const itemCSS = choosen ? styles.choosenGroupItem : styles.GroupItem
   const arrowCSS = choosen ? styles.arrowRotate : styles.arrow
   return (
      <li className={itemCSS}>
         <H2 addClass={styles.titleContainer} onClick={() => clickFnc(id)}>
            {text}
            <RiArrowDownSLine className={arrowCSS} />
         </H2>
            {choosen && products.map(item => {
               return (
                  <ProductItem 
                     key={item.id}
                     product={item}
                     setProductHandler={setProductHandler}
                     choosen={item.id === productId}
                  />
            ) 
         })}
      </li>
   )
}

export default GroupItem
