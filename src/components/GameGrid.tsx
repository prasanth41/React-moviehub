import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameContainer";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ( { gameQuery }: Props ) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, i) => i);
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
        columnGap={5} rowGap={5} padding={10}>
        {isLoading && skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
        {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
