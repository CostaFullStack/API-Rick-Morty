import styled from "styled-components";

export const StyledSelect = styled.select`
  background: transparent;
  border: 1px solid #ffd700;
  outline: none;
  width: 300px;
  height: 50px;
  border-radius: 5px;
  font-family: "Poppins", serif;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  padding: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #ffd700;
  }
`;
export const Option = styled.option`
  background-color: #ffd700;
  outline: none;
  width: 300px;
  height: 50px;
  border-radius: 5px;
  font-family: "Poppins", serif;
  font-size: 15px;
  font-weight: bold;
  color: #1c1c1c;
`;
