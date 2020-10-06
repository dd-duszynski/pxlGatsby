import React from 'react';
import styles from './H4.module.scss';

const H4 = (props) => {
   return (
      <h4 className={styles.H4}>
         {props.children}
      </h4>
   )
}

export default H4
