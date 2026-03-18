import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 15 }, (_, i) => i);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} columnGap={10} rowGap={10} padding={10}>
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
