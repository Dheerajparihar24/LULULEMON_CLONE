import { Box, HStack } from "@chakra-ui/react";
import { MobileNavbar } from "../components/Navbar/MobileComponent/MobileNavbar";
import { MyBag } from "../components/MyBag";
import { Summary } from "../components/Summary";

const Cart = () => {
  return (
    <>
      <MobileNavbar />
      <Box bg="#FAFAFA" width="90%" m="auto">
        <HStack justify="space-between">
          <MyBag />
          <Summary />
        </HStack>
      </Box>
    </>
  );
};

export default Cart;
