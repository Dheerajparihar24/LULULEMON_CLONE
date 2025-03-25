import { Menu, MenuButton, MenuList, MenuItem, Button, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FiHelpCircle } from "react-icons/fi";

const HelpDropdown = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
        _hover={{ color: "blue.500" }}
      >
        <Icon as={FiHelpCircle} mr={2} />
        Get Help
      </MenuButton>
      <MenuList>
        <MenuItem>Start a Return</MenuItem>
        <MenuItem>Track my Order</MenuItem>
        <MenuItem>Check Return Status</MenuItem>
        <MenuItem>Help & Support</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HelpDropdown;
