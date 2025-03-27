import { Box, Heading, Image, Text } from "@chakra-ui/react";

import { ButtonComponent } from "./ButtonComponent";

export const MediaLayout = ({imgSrc}) => {
  return (
    <Box my={20}>
      <Box w="100%">
        <Image src={imgSrc} w="100%" h="500px" />{" "}
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <Heading>You’ve landed on cloud 9</Heading>
        <Text>
          Iconic Align in new Goodnight Plum—so unbelievably soft, you might
          just pinch yourself.
        </Text>
        <Box>
          <ButtonComponent value="SHOP MATCHING SETS" />
        </Box>
      </Box>
    </Box>
  );
};
