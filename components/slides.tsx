import React from 'react';
import style from './slides.module.css';

type SlidesProps = {
    src: string;
}

const Slides = ({ src }: SlidesProps): JSX.Element => {
  return (
    <div className={style.slidesWrapper}>
        <iframe
            src={src}
            title="Slides player"
            allow="fullscreen"
            allowFullScreen
        />
    </div>
  );
};

export default Slides;
