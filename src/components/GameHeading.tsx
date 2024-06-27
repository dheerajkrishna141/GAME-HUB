import { Heading } from "@chakra-ui/react";
import useGenre from "../Hooks/useGenre";
import usePlatform from "../Hooks/usePlatform";
import useGameQueryStore from "../StateManagement/store";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platName = usePlatform(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const genrName = useGenre(genreId);
  const heading = `${platName || ""} ${genrName || ""} Games`;
  return (
    <div>
      <Heading as="h1">{heading}</Heading>
    </div>
  );
};

export default GameHeading;
