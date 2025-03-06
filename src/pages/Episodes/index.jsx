import axios from "axios";
import { useEffect, useState } from "react";
import {
  DivImgRickMorty,
  ImageRickMorty,
  Section,
} from "../../utils/globalStyles";
import { Container } from "../../components/Organism/Container";
import { Card } from "../../components/Molecule/Card";

export const Episodes = () => {
  const [episode, setEpisode] = useState();

  async function Episode() {
    const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
    setEpisode(data.results);
  }

  useEffect(() => {
    Episode();
  }, []);

  return (
    <Section>
      <DivImgRickMorty>
        <ImageRickMorty
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
          alt="Imagem logo"
        />
      </DivImgRickMorty>
      <Container>
        {episode &&
          episode.map((element) => (
            <Card
              key={element.id}
              title={element.name}
              subtitle={element.air_date}
              text={element.episode}
            />
          ))}
      </Container>
    </Section>
  );
};
