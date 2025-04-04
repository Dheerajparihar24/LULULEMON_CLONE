import { Box, Flex, Image, Input, InputGroup, List } from "@chakra-ui/react";
import logo from "../logo.svg";

// Icons import
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { RiShoppingBag2Line } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";

import { Link } from "react-router-dom";

// Import dropdown data
import {
  womenMenu,
  w_promoData,
  menMenu,
  m_promoData,
  bagsMenu,
  bagsPromoData,
} from "../../../data/menuData";

export const MobileNavbar = () => {
  return (
    <Box as="nav" alignItems="center" bg="white" px={6} marginBottom={4} border={{base:"none", lg:"1px solid gray"}}>
      <Box maxW="85rem" mx="auto" my={4} display="flex" alignItems="center">
        <Box
          w={"186px"}
          h={"40px"}
          marginRight={4}
          display="flex"
          alignItems="center"
        >
          <Image src={logo} />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap={{ base: 2, lg: 4 }}
          width="100%"
        >
          <Box as={MdOutlineAccountCircle} w="38px" h="32px" />

          <Link to="/cart">
            <Box
              display={{ base: "block", lg: "none" }}
              as={RiShoppingBag2Line}
              w="38px"
              h="32px"
            />
          </Link>
        </Box>
      </Box>

      <Box display={{ base: "block", lg: "none" }}>
        <InputGroup
          startElement={
            <LuSearch style={{ marginRight: "-40px", fontSize: "16px" }} />
          }
        >
          <Input placeholder="Search" p={4} size={{ base: "md", lg: "xl" }} />
        </InputGroup>
      </Box>
    </Box>
  );
};
