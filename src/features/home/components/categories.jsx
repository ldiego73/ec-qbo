import styled from "styled-components";
import {
  COLOR_GRAY_LIGHT,
  TEXT_COLOR_PRIMARY,
} from "../../../components/variables";

const url = "https://ec-qbo.herokuapp.com/categories";
const items = [
  { title: "Promociones", image: `${url}/promociones.svg` },
  { title: "Dim Sum", image: `${url}/dim-sum.svg` },
  { title: "Menu", image: `${url}/menu.svg` },
  { title: "Sopas", image: `${url}/sopas.svg` },
  { title: "Bebidas", image: `${url}/bebidas.svg` },
  { title: "Platos dulces", image: `${url}/platos-dulces.svg` },
  { title: "Platos salados", image: `${url}/platos-salados.svg` },
  { title: "A la Carta", image: `${url}/a-la-carta.svg` },
  { title: "Familiar", image: `${url}/familiar.svg` },
];

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  cursor: pointer;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${COLOR_GRAY_LIGHT};
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${TEXT_COLOR_PRIMARY};
`;

export const Categories = () => (
  <Wrapper>
    {items.map((item, i) => (
      <Icon key={`category-icon-${i}`}>
        <Circle>
          <img src={item.image} alt={item.title} />
        </Circle>
        <Title>{item.title}</Title>
      </Icon>
    ))}
  </Wrapper>
);
