import { Box } from "@chakra-ui/react";

import LogIn_1 from "../../assets/images/loginImg/LogInScreen_1.webp";
import LogIn_2 from "../../assets/images/loginImg/LogInScreen_2.webp";

import { useEffect, useState } from "react";

export const ImageSlider = () => {
  const images = [LogIn_1, LogIn_2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <Box
      as="aside"
      width="100%"
      height="100%"
      overflow="hidden"
      backgroundImage={`url(${images[currentImageIndex]})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      transition="background-image 0.8s ease-in-out"
    ></Box>
  );
};
