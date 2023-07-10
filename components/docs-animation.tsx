import React from "react";
import { useLottie } from "lottie-react";
import docsAnimation from "../animations/docs-animation.json";

const DocsAnimation = () => {
    const options = {
      animationData: docsAnimation,
      loop: true,
      speed: 0.2
    };
  
    const { View } = useLottie(options);
  
    return <>{View}</>;
  };
  
  export default DocsAnimation;