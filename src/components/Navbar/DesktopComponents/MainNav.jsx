import { Box, Flex, Image, Input, InputGroup, List } from "@chakra-ui/react";
import logo from "../logo.svg";

// Icons import
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { RiShoppingBag2Line } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";

import { Link } from "react-router-dom";
import { useState } from "react";
import { DropdownMenu } from "./Dropdown/DropdownMenu";

// Import dropdown data
import {
  womenMenu,
  w_promoData,
  menMenu,
  m_promoData,
  bagsMenu,
  bagsPromoData,
} from "../../../data/menuData";

export const MainNav = () => {
  const [hoverMenu, setHoverMenu] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  // Function to handle hover enter
  const handleMouseEnter = (menu) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setHoverMenu(menu);
  };

  // Function to handle hover leave
  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setHoverMenu(null);
    }, 300);
    setTimeoutId(id);
  };

  return (
    <Box as="nav" alignItems="center" bg="white" className="mainNav">
      <Box
        w="100%"
        maxW="85rem"
        m="auto"
        display="grid"
        gridTemplateColumns="auto auto 1fr"
        alignItems="center"
        py="4"
      >
        {/* Section - 1st  Logo */}
        <Box w={"186px"} h={"40px"}>
          <Image src={logo} />
        </Box>

        {/* Section - 2nd Links */}
        <Box
          as="ul"
          listStyle="none"
          display="flex"
          gap={4}
          w="609px"
          justifyContent="center"
          css={{
            "& > li": {
              fontWeight: "bold",
              position: "relative",
              paddingBottom: "5px",
              borderBottom: "3px solid transparent",
              transition: "border-bottom-color 0.3s ease",
              "&:hover": {
                borderBottomColor: "black",
              },
            },
          }}
        >
          <Box
            as="li"
            position="relative"
            fontWeight="bold"
            onMouseEnter={() => handleMouseEnter("women")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/women">Women</Link>
            {hoverMenu === "women" && (
              <DropdownMenu menuSection={womenMenu} promoData={w_promoData} />
            )}
          </Box>

          <Box
            as="li"
            position="relative"
            onMouseEnter={() => handleMouseEnter("men")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/men">Men</Link>
            {hoverMenu === "men" && (
              <DropdownMenu menuSection={menMenu} promoData={m_promoData} />
            )}
          </Box>

          <Box
            as="li"
            position="relative"
            onMouseEnter={() => handleMouseEnter("bags")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/bags">Bags</Link>
            {hoverMenu === "bags" && (
              <DropdownMenu menuSection={bagsMenu} promoData={bagsPromoData} />
            )}
          </Box>

          <Box as="li">
            <Link to="/accessories">Accessories</Link>
          </Box>

          <Box as="li">Shoes</Box>

          <Box as="li" color="red">
            Member Offer
          </Box>
        </Box>

        {/* Section - 3rd  Search & Icons */}
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
