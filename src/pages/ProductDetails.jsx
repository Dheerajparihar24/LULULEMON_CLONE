import { useParams } from "react-router-dom";
import { MainNav } from "../components/Navbar/DesktopComponents/MainNav";

import { useState } from "react";

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

import { LuShoppingBag } from "react-icons/lu";
import { BsBagHeart } from "react-icons/bs";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  //Find product by ID
  const product = productData.find((item) => item.id === Number(id));
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("s");

  return (
    <Box bg="gray.100">
      <MainNav />
      <Flex px="8%">
        <Box flex="1">
          <Image src={product.image} alt={product.name} />
        </Box>

        {/* Right Side - Product Details */}
        <Box flex="1" p={5}>
          <Box maxWidth="550px">
            <Text fontSize="2xl" fontWeight="bold">
              {product.name}
            </Text>
            <Text fontSize="lg" color="gray.500" my={4}>
              {product.price}
            </Text>
            <Text>{product.description}</Text>

            {/* Color Selection */}
            <Text mt={3}>Colour:</Text>
            <Flex>
              {product.colors.map((color, index) => (
                <Box
                  key={index}
                  w="30px"
                  h="30px"
                  bg={color}
                  borderRadius="50%"
                  cursor="pointer"
                  border={selectedColor === color ? "2px solid black" : "none"}
                  onClick={() => setSelectedColor(color)}
                  mx={1}
                />
              ))}
            </Flex>

            {/* Size Selection */}
            <Text mt={3}>Select Size:</Text>
            <Flex>
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "solid" : "outline"}
                  onClick={() => setSelectedSize(size)}
                  mx={1}
                  p={2}
                  borderRadius="none"
                >
                  {size}
                </Button>
              ))}
            </Flex>

            {/* Add to Cart */}
            <Flex my={4} gap={4}>
              <Button
                colorPalette="red"
                p={4}
                width="50%"
                onClick={() =>
                  dispatch(addToCart(product, selectedColor, selectedSize))
                }
              >
                <LuShoppingBag />
                Add to Bag
              </Button>
              <Button colorPalette="yellow" p={4} width="50%">
                <BsBagHeart />
                WISHLIST
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
