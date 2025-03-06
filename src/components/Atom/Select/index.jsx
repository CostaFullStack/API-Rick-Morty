import { Option, StyledSelect } from "./style";

export const Select = ({ opcoes, setDaVez }) => {
  return (
    <StyledSelect onChange={(element) => setDaVez(element.target.value)}>
      {opcoes &&
        opcoes.map((element) => (
          <Option value={element.valor}>{element.texto}</Option>
        ))}
    </StyledSelect>
  );
};
