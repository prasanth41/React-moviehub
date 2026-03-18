import { Game } from "@/hooks/useGames";
import { Card, Image, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root borderRadius={10} maxW="sm" overflow="hidden">
        <Image src={game.background_image} alt={game.name} />
        <Card.Body gap="2">
          <Card.Title>{game.name}</Card.Title>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
