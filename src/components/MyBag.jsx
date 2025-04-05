import { Box, Heading, Text } from "@chakra-ui/react";
import { CiDeliveryTruck } from "react-icons/ci";

export const MyBag = () => {
  const cartProduct = JSON.parse(localStorage.getItem("cart")) || [];
  return (
    <>
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
        <CiDeliveryTruck size="40px" />
        <Heading fontSize="16px">Ship Items</Heading>
        <Text marginLeft={2}>Arrives within 2-7 business days</Text>

        <Box divideX="2px">
          <Text>FREE standard shipping</Text>
        </Box>
      </Box>
    </>
  );
};
