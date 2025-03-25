import { Box, Flex, Image, Input, InputGroup, List } from "@chakra-ui/react";
import logo from "../logo.svg";

//Icons import
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { RiShoppingBag2Line } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";

import { Link } from "react-router-dom";
import { useState } from "react";
import { DropdownMenu } from "./Dropdown/DropdownMenu";

import { womenMenu, w_promoData } from "../../../data/menuData";

export const MainNav = () => {
  const [hoverMenu, setHoverMenu] = useState(null);

  const promoData = {
    image: "https://via.placeholder.com/200",
    title: "Hit the road, pack.",
    description: "This limitless gear stays the course for as long as you do.",
  };
  return (
    <Box
      as="nav"
      alignItems="center"
      fontFamily="Graphik"
      fontWeight="bold"
      fontSize="lg"
      bg="white"
      className="mainNav"
    >
      <Box
        w="100%"
        maxW="85rem"
        m="auto"
        display="grid"
        gridTemplateColumns="auto auto 1fr"
        alignItems="center"
        py="4"
      >
        {/* Section - 1st  Logo*/}
        <Box w={"186px"} h={"40px"}>
          <Image src={logo} />
        </Box>

        {/* Section -2nd Links  */}
        <Box
          as="ul"
          listStyle="none"
          display="flex"
          gap={4}
          w="609px"
          justifyContent="center"
        >
          <Box
            as="li"
            position="relative"
            onMouseEnter={() => setHoverMenu("women")}
            onMouseLeave={() => setHoverMenu(null)}
          >
            <Link to="/women">Women</Link>
            {hoverMenu === "women" && (
              <DropdownMenu menuSection={womenMenu} promoData={w_promoData} />
            )}
          </Box>

          <Box as="li">
            <Link to="/men">Men</Link>
          </Box>

          <Box as="li">
            <Link to="/bags">Bags</Link>
          </Box>

          <Box as="li">
            <Link to="/accessories">Accessories</Link>
          </Box>

          <Box as="li">Shoes</Box>

          <Box as="li">Member Offer</Box>
        </Box>

        {/* Section - 3rd  search & Icons*/}
        <Box
          as="ul"
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

          <Box as={MdOutlineAccountCircle} w="40px" h="33px" />
          <Box as={GoHeart} w="40px" h="33px" />
          <Link to="/cart">
            <Box as={RiShoppingBag2Line} w="40px" h="33px" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
