import React from 'react';
import styles from './Paragraph.module.scss';

const Paragraph = ({children, addClass}) => {
   return (
      <p className={[styles.Paragraph, addClass].join(' ')}>
         {children}
      </p>
   )
}

export default Paragraph
