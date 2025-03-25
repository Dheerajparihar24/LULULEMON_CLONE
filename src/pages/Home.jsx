import { Box } from "@chakra-ui/react";
import { Header } from "../components/Navbar/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";

const Home = () => {
  return (
    <Box backgroundColor="#fafafa">
      <Header />
      <HeroSection />
    </Box>
  );
};
export default Home;
