import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore(
    (selector) => selector.gameQuery.genreId,
  );
  const setSelectedGenreId = useGameQueryStore(
    (selector) => selector.setGenreId,
  );

  if (error) return null;
  if (isLoading) return <GenreListSkeleton />;

  const isSelectedGenre = (id: number) => id === selectedGenreId;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="8px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              />
              <Button
                fontWeight={isSelectedGenre(genre.id) ? "bold" : "normal"}
                colorScheme={isSelectedGenre(genre.id) ? "purple" : "white"}
                variant="link"
                onClick={() => setSelectedGenreId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
