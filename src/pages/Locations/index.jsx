import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {
  DivImgRickMorty,
  ImageRickMorty,
  Section,
} from "../../utils/globalStyles";
import { Container } from "../../components/Organism/Container";
import { Card } from "../../components/Molecule/Card";

export const Locations = () => {
  const [location, setLocation] = useState();

  async function Location() {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );
    setLocation(data.results);
  }

  useEffect(() => {
    Location();
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
        {location &&
          location.map((element) => (
            <Card
              key={element.id}
              title={element.name}
              subtitle={element.type}
              text={element.dimension}
            />
          ))}
      </Container>
    </Section>
  );
};
