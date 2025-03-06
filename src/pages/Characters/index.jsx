import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Input } from "../../components/Atom/Input";
import { Select } from "../../components/Atom/Select";
import { gendersOp, speciesOp, statusOp } from "../../utils/opcoes";
import { Container } from "../../components/Organism/Container";
import { CardCharacter } from "../../components/Molecule/CardCharacter";
import {
  DivImgRickMorty,
  ImageRickMorty,
  Section,
} from "../../utils/globalStyles";
import { DivFilter } from "./style";

export const Characters = () => {
  const [characters, setCharacters] = useState();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  async function FilterOrSearch(url) {
    setCharacters(null);
    const { data } = await axios.get(url);
    setCharacters(data.results);
  }

  useEffect(() => {
    name || status || species || gender
      ? FilterOrSearch(
          `https://rickandmortyapi.com/api/character?name=${name}&species=${species}&gender=${gender}&status=${status}`
        )
      : FilterOrSearch("https://rickandmortyapi.com/api/character");
  }, [name, status, species, gender]);

  return (
    <Section>
      <DivImgRickMorty>
        <ImageRickMorty
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
          alt="Imagem logo"
        />
      </DivImgRickMorty>

      <DivFilter>
        <Input setName={setName} />

        <Select opcoes={statusOp} setDaVez={setStatus} />

        <Select opcoes={speciesOp} setDaVez={setSpecies} />

        <Select opcoes={gendersOp} setDaVez={setGender} />
      </DivFilter>

      <Container>
        {characters &&
          characters.map((element) => (
            <CardCharacter element={element} id={element.id} />
          ))}
      </Container>
    </Section>
  );
};
