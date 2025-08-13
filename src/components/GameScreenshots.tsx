import { Heading, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading marginBottom={6}>Screenshots</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {data?.results.map((file) => <Image key={file.id} src={file.image} />)}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
