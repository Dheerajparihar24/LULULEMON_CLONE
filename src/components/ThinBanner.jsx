import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ButtonComponent } from "./ButtonComponent";

export const ThinBanner = () => {
  return (
    <Box bg="gray.200" p={4} marginBottom={10}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>New to lululemon</Heading>
        <Text>Get familiar, get inspired, and get moving</Text>
        {/* <ButtonComponent value="START HERE" /> */}
        <Button
          variant="surface"
          p={4}
          _hover={{
            border: "1px solid black",
          }}
        >
          Start Here
        </Button>
      </Flex>
    </Box>
  );
};
