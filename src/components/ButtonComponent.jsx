import { Button } from "@chakra-ui/react";

export const ButtonComponent = ({ value }) => {
  return (
    <Button
      variant="outline"
      border="1px solid black"
      size="lg"
      fontWeight="bold"
      _hover={{
        backgroundColor: "black",
        color: "white",
      }}
      p={4}
    >
      {value}
    </Button>
  );
};
