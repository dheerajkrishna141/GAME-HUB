import React from "react";
import Games from "../Entities/Games";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const Metacritic = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 70 ? "yellow" : "";

  return (
    <>
      <Badge
        fontSize="14px"
        paddingX={2}
        borderRadius="4px"
        colorScheme={color}
      >
        {score}
      </Badge>
    </>
  );
};

export default Metacritic;
