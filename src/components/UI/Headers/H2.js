import React from 'react';
import styles from './H2.module.scss';

const H2 = ({children, addClass}) => {
   return (
      <h2 className={[styles.H2, addClass].join(" ")}>
         {children}
      </h2>
   )
}

export default H2
