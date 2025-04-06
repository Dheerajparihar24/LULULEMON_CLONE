import { Box, Flex, HStack } from "@chakra-ui/react";
import { MobileNavbar } from "../components/Navbar/MobileComponent/MobileNavbar";
import { MyBag } from "../components/cart/MyBag";
import { Summary } from "../components/cart/Summary";

const Cart = () => {
  return (
    <>
      <MobileNavbar />
      <Box bg="#FAFAFA" width="90%" m="auto">
        <Flex justify="space-between" p={4}>
          <MyBag />
          <Summary />
        </Flex>
      </Box>
    </>
  );
};

export default Cart;
