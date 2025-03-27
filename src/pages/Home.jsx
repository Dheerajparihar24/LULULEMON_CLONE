import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Header } from "../components/Navbar/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { ProductCarousel } from "../components/ProductCarousel";
import { MediaLayout } from "../components/MediaLayout";
import { ProductCategories } from "../components/ProductCategories";
import W_Yoga_Img from "../assets/images/W_Yoga_MediaAction_D_WhatsNew.webp";
import { ThinBanner } from "../components/ThinBanner";
import { ButtonComponent } from "../components/ButtonComponent";

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
        <ProductCarousel />

        <ThinBanner />

        <Flex justifyContent="space-between">
          <MediaLayout imgSrc="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_1_2_Lg_MediaAction_D_WomensRunning?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
          <MediaLayout imgSrc="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_1_2_Lg_MediaAction_D_MensRunning?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
        </Flex>

        <MediaLayout imgSrc="https://images.lululemon.com/is/image/lululemon/NA_Q1_2025_MembershipMadness_Drop3_Awareness_Live_Ecomm_1_1_Med_MediaAction_D?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />

        <Flex
          h="250px"
          width="100%"
          marginBottom={4}
          justifyContent="center"
          alignItems="center"
          backgroundImage={`url(${"https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_BrandStatement_D?wid=1322&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"})`}
        >
          <Flex
            bg="white"
            display="inline-block"
            p={4}
            width="400px"
            textAlign="center"
          >
            <Heading marginBottom={2}>Shopping made seamless.</Heading>
            <Text marginBottom={2}>Free shipping. Free returns</Text>
            <ButtonComponent value="LEARN MORE" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default Home;
