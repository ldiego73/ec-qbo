import styled from "styled-components";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./index.scss";

SwiperCore.use([Navigation, Pagination]);

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const Image = styled.img`
  object-fit: cover;
`;

const Opacity = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.7;
  background: #000;
`;

export const BannerImage = ({ src, alt }) => (
  <BannerWrapper>
    <Image src={src} alt={alt} loading="lazy" />
    <Opacity />
  </BannerWrapper>
);

export const Banner = ({ images }) => (
  <Swiper navigation pagination={{ clickable: true }}>
    {images.map((image, i) => (
      <SwiperSlide key={`banner-${i}`}>{image}</SwiperSlide>
    ))}
  </Swiper>
);
