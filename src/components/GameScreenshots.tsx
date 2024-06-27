import { Box, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import useGameScreenshots from "../Hooks/useGameScreenshots";

interface Props {
  id: number;
}
const GameScreenshots = ({ id }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(id);
  if (isLoading) return <Spinner></Spinner>;
  if (error) throw error;
  return (
    <Box marginTop={5}>
      <SimpleGrid spacing={2} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {data.results.map((img) => (
          <Image key={img.id} src={img.image}></Image>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameScreenshots;
