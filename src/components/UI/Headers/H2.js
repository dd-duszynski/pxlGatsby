import React from 'react';
import styles from './H2.module.scss';

const H2 = (props) => {
   return (
      <h2 className={styles.H2}>
         {props.children}
      </h2>
   )
}

export default H2
