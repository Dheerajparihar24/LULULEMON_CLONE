import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import heroSectionImg from "../../assets/images/heroSectionImg.webp";

export const HeroSection = () => {
  return (
    <Box w="100%" bg="white">
      <Box
        maxW="1200px"
        height="550px"
        m="auto"
        backgroundImage={`url(${heroSectionImg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        display="flex"
        flexDir="column"
        justifyContent="center"
        position="relative"
      >
        <Box
          p={8}
          bg="white"
          display="inline-block"
          position="absolute"
          left="-100px"
          lineHeight={3}
        >
          <Heading>lululemon</Heading>
          <Text>Women's What's New</Text>
          <Text>Men's What's New</Text>
          <Text>All Women's</Text>
          <Text>All Men's</Text>
          <Text>All Accessories</Text>
        </Box>
        <Button
          p={4}
          position="absolute" // Position the button absolutely
          bottom="16px"
          right="16px"
        >
          SHOP WHAT'S NEW
        </Button>
      </Box>
      <Flex
        maxW="1200px"
        m="auto"
        justifyContent="space-between"
        paddingTop={8}
        paddingBottom={6}
      >
        <Heading>Dressing up is the occasion. ?</Heading>
        <Text>
          When Wunder Under and Align feel so freeing—why wait for an excuse
        </Text>
      </Flex>
    </Box>
  );
};
