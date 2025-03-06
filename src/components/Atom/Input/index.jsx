import { Search } from "./style";

export const Input = ({ setName }) => {
  return <Search placeholder="Digite o personagem" onChange={(element) => setName(element.target.value)} />;
};
