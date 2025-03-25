import { Box, Flex } from "@chakra-ui/react";

import { TfiLocationPin } from "react-icons/tfi";
import { MdCardGiftcard } from "react-icons/md";
import { MdOutlineHelpCenter } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";

export const UtilityNav = () => {
  return (
    <Flex
      bg="gray.100"
      py={2}
      px={6}
      fontFamily="Graphik"
      className="utilityNav-bar"
      w="100%"
    >
      <Box display="flex" gap={6} maxW="85rem" w="100%" m="0 auto" justifyContent="flex-end">
        {/* Store Location */}
        <Flex
          alignItems="center"
          gap={0.5}
          _hover={{
            borderBottom: "2px solid #000",
          }}
        >
          <TfiLocationPin /> Store Location
        </Flex>

        {/* Gift Card */}
        <Flex
          alignItems="center"
          gap={0.5}
          _hover={{
            borderBottom: "2px solid #000",
          }}
        >
          <MdCardGiftcard /> Gift Card
        </Flex>

        <Flex
          alignItems="center"
          gap={0.5}
          _hover={{
            borderBottom: "2px solid #000",
          }}
        >
          <MdOutlineHelpCenter /> Get Help
        </Flex>

        {/* USA */}
        <Flex
          alignItems="center"
          gap={0.5}
          _hover={{
            borderBottom: "2px solid #000",
          }}
        >
          <TfiWorld /> USA
        </Flex>
      </Box>
    </Flex>
  );
};
