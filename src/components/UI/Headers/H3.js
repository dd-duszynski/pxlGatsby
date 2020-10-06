import React from 'react';
import styles from './H3.module.scss';

const H3 = (props) => {
   return (
      <h3 className={styles.H3}>
         {props.children}
      </h3>
   )
}

export default H3
