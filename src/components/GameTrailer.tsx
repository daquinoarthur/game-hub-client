import { Box, Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const firstVideo = data?.results[0];

  return firstVideo ? (
    <Box marginTop={8}>
      <video src={firstVideo.data[480]} poster={firstVideo.preview} controls />
    </Box>
  ) : null;
};

export default GameTrailer;
