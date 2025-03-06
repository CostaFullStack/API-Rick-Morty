import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Details,
  Divider,
  ImageCharacter,
  SectionDetails,
  Span,
  Title,
} from "./style";
import {
  DivImgRickMorty,
  ImageRickMorty,
  Section,
} from "../../utils/globalStyles";

export const Character = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState();

  async function CharacterById() {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setCharacter(data);
  }

  useEffect(() => {
    CharacterById();
  }, []);

  return (
    <Section>
      <DivImgRickMorty>
        <ImageRickMorty
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
          alt="Imagem logo"
        />
      </DivImgRickMorty>
      {character && (
        <SectionDetails>
          <Divider>
            <ImageCharacter
              src={character.image}
              alt={`Foto do personagem: ${character.name}`}
              />

          </Divider>

          <Divider>
              <Title>{character.name}</Title>
            <Details>
              <Span>Status:</Span> {character.status}
            </Details>
            <Details>
              <Span>Specie: </Span>
              {character.species}
            </Details>
            <Details>
              <Span>Gender: </Span>
              {character.gender}
            </Details>
            <Details>
              <Span>Location: </Span>
              {character.location.name}
            </Details>
            <Details>
              <Span>Origin: </Span>
              {character.origin.name}
            </Details>
            <Details>
              <Span>Type: </Span>
              {character.type || "Unknown"}
            </Details>
          </Divider>
        </SectionDetails>
      )}
    </Section>
  );
};
