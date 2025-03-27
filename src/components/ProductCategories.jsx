import {
  Button,
  Card,
  Flex,
  Image,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";

import { menCategories, womenCategories } from "../data/productCategories";
import { useState } from "react";

export const ProductCategories = () => {
  const [activeSection, setActiveSection] = useState("men");

  const categories = activeSection === "men" ? menCategories : womenCategories;
  return (
    <Box>
      <Heading fontSize="30px" my={4}>
        Shop popular categories.
      </Heading>
      <Flex>
        <Button variant="outline" p={4} onClick={() => setActiveSection("men")}>
          Men
        </Button>
        <Button
          variant="outline"
          p={4}
          onClick={() => setActiveSection("women")}
        >
          Women
        </Button>
      </Flex>
      <Flex gap={6}>
        {categories.map((category, index) => (
          <Card.Root maxW="sm" overflow="hidden" key={category.id} cursor="pointer">
            <Image src={category.image} />
            <Card.Footer display="flex" justifyContent="center" my={3}>
              <Text fontWeight="semibold">{category.name}</Text>
            </Card.Footer>
          </Card.Root>
        ))}
      </Flex>
    </Box>
  );
};
