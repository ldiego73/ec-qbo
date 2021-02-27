/* eslint-disable import/no-unresolved */

import { Banner, BannerImage } from "@components/banner";
import { Container } from "@components/container";
import { Content } from "@components/content";
import { Delivery } from "@components/delivery";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { bool, node } from "prop-types";

export const Layout = ({ children, showDelivery, showBanner }) => {
  const images = [
    <BannerImage
      key="banner-0"
      src="https://ec-qbo.herokuapp.com/banners/1.jpg"
      alt="Banner 1"
    />,
    <BannerImage
      key="banner-1"
      src="https://ec-qbo.herokuapp.com/banners/2.jpg"
      alt="Banner 2"
    />,
    <BannerImage
      key="banner-2"
      src="https://ec-qbo.herokuapp.com/banners/3.jpg"
      alt="Banner 3"
    />,
    <BannerImage
      key="banner-3"
      src="https://ec-qbo.herokuapp.com/banners/4.jpg"
      alt="Banner 4"
    />,
    <BannerImage
      key="banner-4"
      src="https://ec-qbo.herokuapp.com/banners/5.jpg"
      alt="Banner 5"
    />,
  ];

  return (
    <>
      <Header />
      {showDelivery && <Delivery />}
      {showBanner && <Banner images={images} />}
      <Container>
        <Content direction="column">{children}</Content>
      </Container>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  showDelivery: false,
  showBanner: false,
};

Layout.propTypes = {
  children: node.isRequired,
  showDelivery: bool,
  showBanner: bool,
};
