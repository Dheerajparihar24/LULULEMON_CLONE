import { Box, Image } from "@chakra-ui/react";
import heroSectionImg from "../../assets/images/heroSectionImg.webp";

export const HeroSection = () => {
  return (
    <Box w="100%">
      <Image src={heroSectionImg} w="80%" m="auto" />
    </Box>
  );
};
