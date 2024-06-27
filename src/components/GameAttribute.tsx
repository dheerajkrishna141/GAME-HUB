import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Games from "../Entities/Games";
import DefinitionItem from "./DefinitionItem";
import Metacritic from "./Metacritic";

interface Props {
  data: Games;
}
const GameAttribute = ({ data }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <DefinitionItem title="Platforms">
        {data.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem title="Metascore">
        <Metacritic score={data.metacritic}></Metacritic>
      </DefinitionItem>

      <DefinitionItem title="Genres">
        {data.genres.map((gen) => (
          <Text key={gen.id}>{gen.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem title="Publishers">
        {data.publishers?.map((pub) => (
          <Text key={pub.id}>{pub.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
