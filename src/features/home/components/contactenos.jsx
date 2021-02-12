import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import {
  TEXT_COLOR_PRIMARY,
  TEXT_COLOR_SECONDARY,
} from "../../../components/variables";
import { Title } from "../../../components/title";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 377px;
  margin-bottom: 62px;
`;

const Info = styled.div`
  flex: 1;
  color: ${TEXT_COLOR_PRIMARY};
`;

const SubTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 20px 0;
`;

const Number = styled.div`
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.015em;
  margin-bottom: 24px;
`;

const Address = styled.div`
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.015em;
  color: ${TEXT_COLOR_SECONDARY};
`;

const Map = styled.div`
  border-radius: 32px;
  width: 720px;
  height: 377px;
`;

export const Contactenos = () => (
  <Wrapper>
    <Info>
      <Title value="¿Aún no nos visitas?" />
      <SubTitle>Encuéntranos de lunes a domingo de 11 am a 8 pm.</SubTitle>
      <Number>Tel. 01 5661838</Number>
      <Number>Cel. 928 282776</Number>
      <Address>Av. Brígida Silva de Ochoa 376, San Miguel</Address>
    </Info>
    <Map>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCiamhnolsyvcnevDJgUIu8hsjt_9iwAm4" }}
        defaultCenter={{ lat: -12.0790006, lng: -77.0894047 }}
        defaultZoom={17}
      />
    </Map>
  </Wrapper>
);
