import { node, bool } from "prop-types";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Container } from "../components/container";
import { Content } from "../components/content";
import { Delivery } from "../components/delivery";
import { Banner, BannerImage } from "../components/banner";
import { EcommerceProvider } from "../contexts/ecommerce.provider";

export const Layout = ({ children, showDelivery, showBanner }) => {
  const images = [
    <BannerImage src="https://ec-qbo.herokuapp.com/banners/1.jpg" alt="Banner 1" />,
    <BannerImage src="https://ec-qbo.herokuapp.com/banners/2.jpg" alt="Banner 2" />,
    <BannerImage src="https://ec-qbo.herokuapp.com/banners/3.jpg" alt="Banner 3" />,
    <BannerImage src="https://ec-qbo.herokuapp.com/banners/4.jpg" alt="Banner 4" />,
    <BannerImage src="https://ec-qbo.herokuapp.com/banners/5.jpg" alt="Banner 5" />,
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

Layout.propTypes = {
  children: node.isRequired,
  showDelivery: bool,
  showBanner: bool,
};
