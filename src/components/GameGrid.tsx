import { Text, SimpleGrid, Button, Box } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameContainer";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ( { gameQuery }: Props ) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, i) => i);
  return (
    <Box padding={10}>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
        columnGap={5} rowGap={5} >
        {isLoading && skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}

          {data?.pages.map(page => (
            page.results.map(game => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))
          ))}
      </SimpleGrid>
      <Button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage} marginY={5}
        variant="subtle" size="md" colorPalette="gray" >
        {isFetchingNextPage ? 'Loading...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
      </Button>
    </Box>
  );
};

export default GameGrid;
