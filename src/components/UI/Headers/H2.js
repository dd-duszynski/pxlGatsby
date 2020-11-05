import React from 'react';
import styles from './H2.module.scss';

const H2 = ({children, addClass, onClick}) => {
   return (
      <h2 className={[styles.H2, addClass].join(" ")} onClick={onClick}>
         {children}
      </h2>
   )
}

export default H2
