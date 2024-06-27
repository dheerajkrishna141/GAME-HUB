import React from "react";
import Games from "../Entities/Games";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./Metacritic";
import getCroppedImageUrl from "../Services/image-url";
import Emoji from "./Emoji";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" padding="2px" marginBottom={3}>
          <PlatformIconList
            platfroms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <Metacritic score={game.metacritic}></Metacritic>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
      </CardBody>
      <CardFooter>
        <Emoji rating={game.rating_top}></Emoji>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
