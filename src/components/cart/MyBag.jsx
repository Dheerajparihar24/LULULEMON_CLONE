import { removeFromCart } from "../../redux/actions/cartActions";
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
import { useDispatch, useSelector } from "react-redux";

export const MyBag = () => {
  const dispatch = useDispatch();

  const cartProduct = useSelector((state) => state.cart.cart);

  return (
    <VStack align="flex-start">
      <Box gap={2} alignItems="center" marginBottom={2} fontSize="20px">
        <Heading as="h1" fontSize="35px">
          My Bag
        </Heading>
        <span>({cartProduct.length} Item)</span>
      </Box>

      <Box display="flex" gap={2} alignItems="center" fontSize="14px">
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
          borderRadius="none"
          maxWidth="600px"
          width="100%"
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
                onClick={() => dispatch(removeFromCart(product.id))}
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
