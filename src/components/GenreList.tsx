import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import Genre from "../Entities/Genre";
import getCroppedImageUrl from "../Services/image-url";
import useGameQueryStore from "../StateManagement/store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return null;
  return (
    <div>
      {isLoading &&
        skeletons.map((skel) => <SkeletonText key={skel}></SkeletonText>)}
      <Heading fontSize="x-large" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((gen) => (
          <ListItem key={gen.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(gen.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenreId === gen.id ? "bold" : "normal"}
                onClick={() => setGenreId(gen.id)}
                variant="link"
                fontSize="lg"
              >
                {" "}
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
