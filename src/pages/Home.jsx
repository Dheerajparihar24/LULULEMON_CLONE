import { Box } from "@chakra-ui/react";
import { Header } from "../components/Navbar/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { ProductCarousel } from "../components/ProductCarousel";
import { MediaLayout } from "../components/MediaLayout";
import { ProductCategories } from "../components/ProductCategories";
import W_Yoga_Img from "../assets/images/W_Yoga_MediaAction_D_WhatsNew.webp";

const Home = () => {
  return (
    <Box backgroundColor="white">
      <Header />
      <Box w="90%" m="auto">
        <HeroSection />
        <ProductCarousel />
        <MediaLayout imgSrc={W_Yoga_Img} />
        <ProductCategories />
        <MediaLayout imgSrc="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk4_M_OTM_1_1_Med_MediaAction_D_Mens?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
      </Box>
    </Box>
  );
};
export default Home;
