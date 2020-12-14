import React from 'react';
import styles from './Paragraph.module.scss';

const Paragraph = ({children, addClass, fontSize}) => {
   return (
      <p 
         className={[addClass, styles.Paragraph ].join(' ')} 
         style={{fontSize: fontSize}}
      >
         {children}
      </p>
   )
}

export default Paragraph
