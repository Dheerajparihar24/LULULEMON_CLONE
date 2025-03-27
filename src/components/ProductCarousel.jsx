import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { products } from "../data/productsData";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProductCard } from "./ProductCard";
import { ButtonComponent } from "./ButtonComponent";

export const ProductCarousel = () => {
  return (
    <Box className="product_carousel_container" position="relative" my={4}>
      <Flex justifyContent="center" my={6}>
        <Heading fontSize="35px" className="carousel_title">
          What’s new this week.
        </Heading>
      </Flex>

      {/* Navigation Buttons */}

      <IconButton
        aria-label="Previous"
        icon={<FaAngleLeft fontSize="24px" />}
        position="absolute"
        left="10px"
        top="50%" // Center it correctly
        transform="translateY(-50%)"
        zIndex="10"
        className="prev-btn"
        bg="white"
        boxShadow="md"
        _hover={{ bg: "gray.100" }}
      />

      <IconButton
        aria-label="Next"
        icon={<FaAngleRight fontSize="24px" />}
        position="absolute"
        right="10px"
        top="50%" // Center it correctly
        transform="translateY(-50%)"
        zIndex="10"
        className="next-btn"
        bg="white"
        boxShadow="md"
        _hover={{ bg: "gray.100" }}
      />

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        modules={[Pagination, Navigation]}
        style={{
          paddingBottom: "50px",
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex justifyContent="center">
        <ButtonComponent value={"SHOP SPRING CLOTHES"} />
      </Flex>
    </Box>
  );
};
