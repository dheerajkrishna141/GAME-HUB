import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttribute from "../components/GameAttribute";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import ExpandableText from "../ExpandableText";
import useGameDescription from "../Hooks/useGameDescription";

const GameDetailPage = () => {
  const params = useParams();
  const { data, isFetching, error } = useGameDescription(params.slug!);
  if (error) throw error;
  if (!data) return null;
  return (
    <>
      {isFetching && <Spinner></Spinner>}

      <SimpleGrid spacing={5} columns={{ sm: 1, md: 2 }}>
        <GridItem>
          <Heading>{data?.name}</Heading>
          <ExpandableText>{data?.description_raw}</ExpandableText>
          <GameAttribute data={data}></GameAttribute>
        </GridItem>
        <GridItem>
          <GameTrailer id={data.id}></GameTrailer>
          <GameScreenshots id={data.id}></GameScreenshots>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
