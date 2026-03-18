import { Game } from "@/hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"
import PlatFormIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageurl from "@/services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root>
        <Image src={getCroppedImageurl(game.background_image)} alt={game.name} />
        <Card.Body gap="1">
          <Card.Title>
            <Tooltip content={game.name} positioning={{ placement: "top-start" }}>
            <Text  overflow="hidden" textOverflow="ellipsis"  whiteSpace="nowrap">{game.name}</Text>
            </Tooltip>
            </Card.Title>
          <HStack justifyContent="space-between">
            <PlatFormIconList platforms={game.parent_platforms.map((platform) => platform.platform,)} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
