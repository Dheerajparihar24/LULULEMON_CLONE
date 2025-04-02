import { Box, Button, Heading, Text } from "@chakra-ui/react";

import LogIn_1 from "../../assets/images/loginImg/LogInScreen_1.webp";
import LogIn_2 from "../../assets/images/loginImg/LogInScreen_2.webp";

import { useEffect, useState } from "react";

import { FiArrowLeftCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const ImageSlider = () => {
  const images = [LogIn_1, LogIn_2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

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
      backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7)), url(${images[currentImageIndex]})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      transition="background-image 0.8s ease-in-out"
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="80%"
        width="90%"
        justifyContent="space-between"
        m="auto"
      >
        <Button
          maxW={isHovered ? "80px" : "40px"}
          bg="white"
          borderRadius="full"
          px={isHovered ? 6 : 2}
          py={2}
          display="flex"
          alignItems="center"
          gap={2}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => navigate("/")}
        >
          <FiArrowLeftCircle />
          {isHovered && "BACK"}
        </Button>

        <Box>
          {currentImageIndex === 0 ? (
            <>
              <Heading
                fontSize={{ base: "35px", lg: "45px" }}
                color="white"
                marginBottom="15px"
              >
                Wellbeing made easier.
              </Heading>
              <Text color="white" fontSize={{ base: "15px", lg: "20px" }}>
                Discover lululemon Membership, and enjoy benefits like exchanges
                or credit on sale items, early access to product drops, and
                partner perks.
              </Text>
            </>
          ) : (
            <>
              <Heading
                fontSize={{ base: "35px", lg: "45px" }}
                color="white"
                marginBottom="15px"
              >
                Partner Perks
              </Heading>
              <Text color="white" fontSize={{ base: "15px", lg: "20px" }}>
                Move, fuel, and restore with brands we trust. You’ll find new
                ways to support your wellbeing, your way, with member-only
                offers from Oura, La La Land, Barry’s, Erewhon, Life Time, and
                more
              </Text>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
