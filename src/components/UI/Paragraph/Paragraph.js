import React from 'react';
import styles from './Paragraph.module.scss';

const Paragraph = ({children, addClass}) => {
   return (
      <p className={[addClass, styles.Paragraph ].join(' ')}>
         {children}
      </p>
   )
}

export default Paragraph
