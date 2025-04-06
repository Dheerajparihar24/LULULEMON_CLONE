import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CiDeliveryTruck } from "react-icons/ci";

export const MyBag = () => {
  const cartProduct = JSON.parse(localStorage.getItem("cart")) || [];
  return (
    <VStack align="flex-start">
      <Box gap={2} alignItems="center" marginBottom={2} fontSize="20px">
        <Heading as="h1" fontSize="35px">
          My Bag
        </Heading>
        <span>({cartProduct.length} Item)</span>
      </Box>

      <Box
        display="flex"
        gap={2}
        alignItems="center"
        // border="1px solid black"
        fontSize="14px"
      >
        <CiDeliveryTruck size="30px" />
        <Heading fontSize="15px">Ship Items</Heading>
        <Text marginLeft={2}>Arrives within 2-7 business days</Text>

        <Box divideX="2px">
          <Text>FREE standard shipping</Text>
        </Box>
      </Box>

      {cartProduct.map((product, index) => (
        <Card.Root
          key={index}
          flexDirection="row"
          border="1px solid black"
          p={2}
          gap={4}
          maxH="200px"
        >
          <Image
            maxW="170px"
            objectFit="cover"
            src={product.image}
            alt={product.name}
          />
          <Box>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Text>Color: {product.selectedColor}</Text>
              <Text>Size: {product.selectedSize}</Text>
              <Box display="flex" justifyContent="space-between">
                <Text>Quantity: {product.count}</Text>
                <Text>{product.price}</Text>
              </Box>
            </Card.Body>
            <HStack marginTop={4}>
              <Button
                variant="ghost"
                borderRadius="none"
                borderBottom="1px solid"
                px={4}
              >
                REMOVE
              </Button>
              <Button
                variant="ghost"
                borderRadius="none"
                borderBottom="1px solid"
                px={4}
              >
                Save for latter
              </Button>
              <Button
                variant="ghost"
                borderRadius="none"
                borderBottom="1px solid"
                px={4}
              >
                Edit
              </Button>
            </HStack>
          </Box>
        </Card.Root>
      ))}
    </VStack>
  );
};
