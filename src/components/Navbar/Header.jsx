import { Box } from "@chakra-ui/react";
import { DesktopNavbar } from "./DesktopComponents/DesktopNavbar";
import { MobileNavbar } from "./MobileComponent/MobileNavbar";

export const Header = () => {
  return (
    <header>
      <Box display={{ base: "none", lg: "block" }}>
        <DesktopNavbar />
      </Box>
      <Box display={{ base: "block", lg: "none" }}>
        <MobileNavbar />
      </Box>
    </header>
  );
};
