import { useNavigate } from "react-router-dom";
import {
  DivCard,
  ImgCard,
  InfoCard,
  ItemCard,
  Span,
  SpanTitle,
  TitleCard,
} from "./style";

export const CardCharacter = ({ element, id }) => {
  const navigate = useNavigate();

  return (
    <DivCard onClick={() => navigate(`personagem/${id}`)}>
      <ImgCard
        src={element.image}
        alt={`Imagem do personagem ${element.name}`}
      />

      <InfoCard>
        <TitleCard>
          <SpanTitle>Name:</SpanTitle> {element.name}
        </TitleCard>
        <ItemCard>
          <Span>Status:</Span> {element.status}
        </ItemCard>
        <ItemCard>
          <Span>Specie:</Span> {element.species}
        </ItemCard>
        <ItemCard>
          <Span>Gender:</Span> {element.gender}
        </ItemCard>
      </InfoCard>
    </DivCard>
  );
};
