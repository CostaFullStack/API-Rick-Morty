import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffd700;
  padding: 0px 300px;
`;

export const MortyGif = styled.img`
  width: 200px;
`;

export const MenuNav = styled.nav``;
export const ListaUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 25px;
  font-family: "Poppins", serif;
  font-weight: bold;
`;
export const ListaItem = styled.li``;
export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #1c1c1c;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #004600;
    text-decoration: underline;
  }
`;

export const Principal = styled.main`
  background-color: #004600;
  padding: 20px;
`;

export const Rodape = styled.footer`
  background-color: #ffd700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 40px;
`;
export const Direitos = styled.p`
  font-size: 15px;
  font-family: "Poppins", serif;
  font-weight: 500;
`;
