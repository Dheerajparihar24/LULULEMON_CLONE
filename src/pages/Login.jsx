import { Box, Flex, Image } from "@chakra-ui/react";

import { ImageSlider } from "../components/LogIn/ImageSlider";
import { LoginForm } from "../components/LogIn/LoginForm";
import { RegisterForm } from "../components/LogIn/RegisterForm";

export const Login = () => {
  return (
    <Flex height="100vh" width="100vw">
      <Box width="50%" maxHeight="800px">
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
