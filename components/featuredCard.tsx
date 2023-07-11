import React from 'react';
import styles from './featuredCard.module.css'

interface CardProps {
  title: string;
  link: string;
  className: string;
}

const FeaturedCard = ({title, link, className}:CardProps) => {
  return (
     <a href={link} className={`${styles.featuredCard} ${styles[className]}`}>
        <p className={styles.cardTitle}>
          {title}
        </p>
     </a>
  )
}

export default FeaturedCard;