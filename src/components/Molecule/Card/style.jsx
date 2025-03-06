import styled from "styled-components";

export const DivCard = styled.div`
  display: flex;
  border: 1px solid #ffd700;
  flex-direction: column;
  background-color: #1c1c1c;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  text-align: center;

  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    border: 1px solid #00569c;
    background-color: #1c1c1cd3;
  }
`;
export const TitleCard = styled.h2`
  font-family: "Get Schwifty Regular";
  color: #00569c;
  font-size: 25px;
`;
export const SubtitleCard = styled.p`
  font-family: "Get Schwifty Regular";
  color: #ffd700;
  font-size: 25px;
`;
export const TextCard = styled.p`
  font-family: "Get Schwifty Regular";
  color: #00569c;
  font-size: 25px;
`;
