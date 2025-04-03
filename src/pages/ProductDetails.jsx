import { useParams } from "react-router-dom";
import { MainNav } from "../components/Navbar/DesktopComponents/MainNav";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  //Find product by ID
  const product = productData.find((item) => item.id === Number(id));
  return (
    <Box bg="gray.100">
      <MainNav />
      <Flex w="100%">
        <Box w="50%" maxHeight="600px" overflow="hidden" objectFit="fill">
          <Image src="https://images.lululemon.com/is/image/lululemon/LW5GMXS_0023_1?wid=1125&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
        </Box>
        <Box w="50%">butt</Box>
      </Flex>
    </Box>
  );
};
