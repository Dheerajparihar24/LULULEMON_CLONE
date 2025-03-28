import { Box, Flex, Image } from "@chakra-ui/react";

import { ImageSlider } from "../components/LogIn/ImageSlider";
import { LoginForm } from "../components/LogIn/LoginForm";

export const Login = () => {
  return (
    <Flex height="100vh" width="100vw">
      <Box width="50%" maxHeight="800px" border="1px solid black">
        <ImageSlider />
      </Box>

      <Box
        width="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <LoginForm />
      </Box>
    </Flex>
  );
};
