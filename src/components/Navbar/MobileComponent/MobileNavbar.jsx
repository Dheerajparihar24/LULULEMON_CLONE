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
    <Box as="nav" alignItems="center" bg="white" className="mainNav">
      <Box w="100%" maxW="85rem">
        {/* Section - 1st  Logo */}
        <Box w={"186px"} h={"40px"}>
          <Image src={logo} />
        </Box>

        {/* Section - 2nd  Search & Icons */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap={6}
        >
          <Box>
            <InputGroup
              startElement={
                <LuSearch style={{ marginRight: "-40px", fontSize: "16px" }} />
              }
            >
              <Input placeholder="Search" p={4} />
            </InputGroup>
          </Box>

          <Box as={MdOutlineAccountCircle} w="38px" h="32px" />
          <Box as={GoHeart} w="38px" h="32px" />
          <Link to="/cart">
            <Box as={RiShoppingBag2Line} w="38px" h="32px" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
