import { Game } from "@/hooks/useGames";
import { Box, Card, HStack, Image, Text } from "@chakra-ui/react";
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
        <HStack justify="space-between" w="100%" marginY={5} paddingX={6}>
          <Box>
            <PlatFormIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          </Box>
          <Box flexShrink={0}>
            <CriticScore score={game.metacritic} />
          </Box>
        </HStack>
        <Card.Body>
          <Card.Title>
            <Tooltip content={game.name} positioning={{ placement: "top-start" }}>
            <Text  overflow="hidden" textOverflow="ellipsis" fontSize="2xl" whiteSpace="nowrap">{game.name}</Text>
            </Tooltip>
            </Card.Title>

        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
