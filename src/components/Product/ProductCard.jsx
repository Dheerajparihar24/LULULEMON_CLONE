import { Box, Circle, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <Box
      cursor="pointer"
      maxW="320px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <Box>
        <Image src={isHovered ? product.hoverImage : product.image} />

        {/* Show Color Options on Hover */}
        {/* {isHovered && (
          <HStack
            position="absolute"
            // bottom="10px"
            // left="10px"
            // spacing={2}
            bg="white"
            p={2}
            // borderRadius="md"
            border="1px solid black"
            width="100%"
          >
            {product.colors.map((color, index) => (
              <Circle
                key={index}
                size="20px"
                bg={color}
                border="1px solid black"
              />
            ))}
          </HStack>
        )} */}
      </Box>

      <Flex
        fontSize="16px"
        justifyContent="space-between"
        py={5}
        flexWrap="wrap"
      >
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
      </Flex>
    </Box>
  );
};
