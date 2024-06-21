"use client";

import React from "react";
import Lottie from "lottie-react";
// import LottieProps from "lottie-react"

interface AnimationLottieProps {
  animationPath: object; // Assuming animationPath is a JSON object
  width?: string; // Optional width prop
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({
  animationPath,
  width,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || "95%", // Use provided width or default to 95%
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
