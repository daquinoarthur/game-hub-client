import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import Rating from "./Rating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          height="180px"
          objectFit="cover"
        />
        <CardBody>
          <VStack
            alignItems="flex-start"
            justifyContent="space-between"
            height="100%"
          >
            <HStack justifyContent="space-between" width="100%">
              <PlatformIconList
                platforms={game.parent_platforms.map(
                  ({ platform }) => platform,
                )}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize="xl">
              {game.name}
              <Rating rating={game.rating_top} />
            </Heading>
          </VStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
