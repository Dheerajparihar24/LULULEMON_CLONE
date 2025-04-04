import { Box, Heading, Text } from "@chakra-ui/react";
import { MobileNavbar } from "../components/Navbar/MobileComponent/MobileNavbar";

const Cart = () => {
  const cartProduct = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartProduct);
  return (
    <>
      <MobileNavbar />
      <Box bg="#FAFAFA" width="90%" m="auto">
        <Box
          display="inline-flex"
          gap={2}
          alignItems="center"
          marginBottom={4}
          fontSize="20px"
        >
          <Heading as="h1" fontSize="35px">
            My Bag
          </Heading>
          <span>({cartProduct.length} Item)</span>
        </Box>

        <Box display="flex" gap={2} alignItems="center" fontSize="15px">
          <Heading fontSize="16px">Ship Items</Heading>
          <Text marginLeft={2}>Arrives within 2-7 business days</Text>

          <Box divideX="2px">
            <Text>FREE standard shipping</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
