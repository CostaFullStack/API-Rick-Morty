import styled from "styled-components";

export const Search = styled.input`
  background: transparent;
  border: 1px solid #ffd700;
  outline: none;
  width: 300px;
  height: 50px;
  border-radius: 5px;
  color: #000000;
  font-size: 15px;
  font-family: "Poppins", serif;
  font-weight: bold;

  &::placeholder {
    color: #686b6b7a;
    padding: 10px;
  }
`;
