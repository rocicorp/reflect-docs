import React from 'react';
import styles from './card.module.css'

interface CardProps {
  title: string;
  className: string;
}

const Card = ({title, className}:CardProps) => {
  return (
     <div className={`${styles.card} ${styles[className]}`}>
        <span>
          {title}
        </span>
     </div>
  )
}

export default Card;