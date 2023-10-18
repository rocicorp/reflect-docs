import React from "react";
import style from "./video.module.css";

type VideoProps = {
  src: string;
};

const Video = ({ src }: VideoProps): JSX.Element => {
  return (
    <div className={style.videoWrapper}>
      <iframe
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
