import { Box, Button, Heading, Image } from "@chakra-ui/react";
import login_brand_Icon from "../../components/LogIn/login_brand_Icon.svg";


export const LoginForm = () => {
  return (
    <Box
      maxWidth="300px"
      maxHeight="450px"
      height="100%"
      border="1px solid black"
    >
      <Image src={login_brand_Icon} />
      <Heading as="h2">Sign in or create an account</Heading>

      <form>
        
        {/* <FormControl>
          <FormLabel>Email address</FormLabel>
          <FormErrorMessage>Please enter your email address.</FormErrorMessage>
        </FormControl>
        <Button>CONTINUE</Button> */}
      </form>
    </Box>
  );
};
