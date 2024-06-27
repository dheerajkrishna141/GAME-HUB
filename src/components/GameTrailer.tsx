import { Box, Spinner } from "@chakra-ui/react";
import useGameTrailers from "../Hooks/useGameTrailers";

interface Props {
  id: number;
}
const GameTrailer = ({ id }: Props) => {
  const { data, isLoading, error } = useGameTrailers(id);
  if (isLoading) return <Spinner></Spinner>;
  if (error) throw error;
  const first = data.results[0];
  if (!first) return null;
  return (
    <Box marginTop={8}>
      <video src={first.data[480]} poster={first.preview} controls></video>
    </Box>
  );
};

export default GameTrailer;
