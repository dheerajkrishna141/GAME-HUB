import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import GenreList from "./GenreList";
import GameHeading from "./GameHeading";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import GameGrid from "./GameGrid";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "main"`,
          lg: `"aside main"`, //1024 px
        }}
        templateColumns={{
          base: " 1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Flex paddingLeft={10} paddingY={5}>
            <GameHeading></GameHeading>
          </Flex>
          <Flex paddingLeft={10}>
            <Box marginRight={5}>
              <PlatformSelector></PlatformSelector>
            </Box>
            <SortSelector></SortSelector>
          </Flex>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
