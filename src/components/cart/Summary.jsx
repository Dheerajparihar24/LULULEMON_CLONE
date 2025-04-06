import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";

export const Summary = () => {
  const cartProduct = JSON.parse(localStorage.getItem("cart")) || [];
  const subtotal = 38.0;
  const estimatedTotal = 38.0;
  return (
    <div style={{ width: "400px" }}>
      <VStack spacing={4} align="stretch">
        <Heading>Summary</Heading>

        <VStack spacing={3} align="stretch">
          <Flex justify="space-between">
            <Text>Subtotal</Text>
            <Text>${subtotal.toFixed(2)}</Text>
          </Flex>

          <Flex justify="space-between" align="center">
            <HStack spacing={1}>
              <Text>Shipping</Text>
              <IoIosInformationCircleOutline />
            </HStack>
            <Text fontWeight="medium">FREE</Text>
          </Flex>

          <Flex justify="space-between" align="center">
            <HStack spacing={1}>
              <Text>Tax</Text>
              <IoIosInformationCircleOutline />
            </HStack>
            <Text fontWeight="medium">Calculated at checkout</Text>
          </Flex>

          {/* --- Estimated Total --- */}

          <Flex justify="space-between" align="center">
            <Text fontWeight="bold" fontSize="lg">
              Estimated Total
            </Text>
            <Text fontWeight="bold" fontSize="lg">
              USD ${estimatedTotal.toFixed(2)}
            </Text>
          </Flex>

          {/* --- Payment Options Text --- */}

          <HStack spacing={1} wrap="wrap">
            <Text fontSize="xs" color="gray.600">
              or 4 payments of ${(estimatedTotal / 4).toFixed(2)} with
            </Text>
            <Text fontSize="xs" color="gray.600">
              or
            </Text>
            <IoIosInformationCircleOutline />
          </HStack>

          {/* --- Checkout Buttons --- */}
          <VStack>
            <Button
              bg="#D31E28"
              color="white"
              width="full"
              size="lg"
              _hover={{ bg: "#B71A23" }}
            >
              CHECKOUT
            </Button>

            <Text fontSize="sm" color="gray.600" textAlign="center" my={1}>
              or checkout quickly with
            </Text>

            <Button
              bg="#0070BA"
              color="white"
              w="full"
              size="lg"
              _hover={{ bg: "#005A9B" }}
            >
              PayPal
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </div>
  );
};
