import styled from "styled-components";

export const DivCard = styled.div`
  display: flex;
  border: 1px solid #ffd700;
  background-color: #1c1c1c;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    border: 1px solid #00569c;
    background-color: #1c1c1cd3;
  }
`;
export const InfoCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
export const ImgCard = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
`;

export const SpanTitle = styled.span`
  font-family: "Get Schwifty Regular";
  color: #ffd700;
  font-size: 35px;
`

export const Span = styled.span`
  font-family: "Get Schwifty Regular";
  color: #ffd700;
  font-size: 25px;
`;
export const TitleCard = styled.h1`
  font-family: "Get Schwifty Regular";
  color: #00569c;
  font-size: 25px;
`;

export const ItemCard = styled.p`
  font-family: "Get Schwifty Regular";
  color: #00569c;
  font-size: 25px;
`;
