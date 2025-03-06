import { Link, Outlet } from "react-router-dom";
import {
  Cabecalho,
  Direitos,
  ListaItem,
  ListaUl,
  MenuLink,
  MenuNav,
  MortyGif,
  Principal,
  Rodape,
} from "./style";

export const Layout = () => {
  return (
    <>
      <Cabecalho>
        <Link to={"/"}>
          <MortyGif src="https://movementstrategy.com/wp-content/themes/bigdrop-theme/mortyawardy/the-gist-of-it.gif" />
        </Link>
        <MenuNav>
          <ListaUl>
            <ListaItem>
              <MenuLink to={"/"}>Personagens</MenuLink>
            </ListaItem>
            <ListaItem>
              <MenuLink to={"/episodios"}>Episódios</MenuLink>
            </ListaItem>
            <ListaItem>
              <MenuLink to={"/localizacoes"}>Localizações</MenuLink>
            </ListaItem>
          </ListaUl>
        </MenuNav>
      </Cabecalho>

      <Principal>
        <Outlet />
      </Principal>

      <Rodape>
        <Direitos>API Rick & Morty</Direitos>
        <Direitos> © Todos os direitos reservados</Direitos>
      </Rodape>
    </>
  );
};
