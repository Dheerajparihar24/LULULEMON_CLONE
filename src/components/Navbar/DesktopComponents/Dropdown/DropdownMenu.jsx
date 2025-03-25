import { Box, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
import promoPhoto from "../../../../assets/images/W_Run_MegaNavPromo_Running.webp";

export const DropdownMenu = ({ menuSection, promoData }) => {
  console.log(promoData);
  return (
    <Box
      position="fixed"
      top="95px"
      left="0"
      bg="white"
      boxShadow="lg"
      zIndex="1000"
      fontSize="sm"
      width="100vw"
      py={5}
    >
      <Box width="80%" m="auto" p={4}>
        <Box display="flex" justifyContent="space-between" width="100%">
          {/* Section-1 */}
          <Flex gap={6}>
            {/* First Column */}
            <Grid gap={6} borderRight="1px solid black" px={4}>
              {menuSection.slice(0, 1).map((section, index) => (
                <Box key={index}>
                  <Text fontSize="16px" fontWeight="normal">
                    {section.title}
                  </Text>
                  {section.links.map((link, i) => (
                    <Link
                      key={i}
                      display="block"
                      py={1}
                      fontSize="16px"
                      fontWeight="normal"
                      border="2px solid transparent"
                      _hover={{
                        borderBottom: "2px solid read",
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              ))}
            </Grid>

            {/* Second Column */}
            <Box gap={6} px={4}>
              {menuSection.slice(1, 2).map((section, index) => (
                <Box key={index}>
                  <Text mb="5px" color="black" fontWeight="600">
                    {section.title}
                  </Text>
                  <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                    {section.links.map((link, i) => (
                      <Link
                        key={i}
                        display="block"
                        fontSize="16px"
                        marginRight={2}
                        fontWeight="normal"
                      >
                        {link}
                      </Link>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Box>

            {/* Third Column */}
            <Grid gap={6}>
              {menuSection.slice(2, 3).map((section, index) => (
                <Box key={index}>
                  <Text fontWeight="bold" mb="2">
                    {section.title}
                  </Text>
                  {section.links.map((link, idx) => (
                    <Link
                      key={idx}
                      display="block"
                      py="1"
                      fontSize="16px"
                      fontWeight="normal"
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              ))}
            </Grid>
          </Flex>

          {/* Section-2 */}
          <Box w="380px" ml={5}>
            <Image src={promoData.image} borderRadius={4} />
            <Heading>Hit the road, pack.</Heading>
            <Text noOfLines={2} fontWeight="normal">
              This limitless gear stays the course for as long as you and your
              run crew do.
            </Text>
            <Link fontWeight="bold" my={2} color="black">
              Shop Running Clothes
            </Link>
          </Box>
        </Box>
      </Box>
      <Box w="100%" bg="blackAlpha.100" fontWeight="normal">
        {menuSection.slice(3, 4).map((section, i) => (
          <Flex width="80%" m="auto" justifyContent="center" p={4}>
            <Box width="200px">{section.title}</Box>
            <Box width="100%" as="ul" display="flex">
              {section.links.map((link, index) => (
                <Text key={index} as="li" marginRight="3rem">
                  {link}
                </Text>
              ))}
            </Box>
            <Box width="200px"> {section.direction} </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};
