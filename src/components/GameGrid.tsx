import { Text, SimpleGrid, Button, Box } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameContainer";
import { GameQuery } from "@/App";
import InfiniteScroll from 'react-infinite-scroll-component';
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ( { gameQuery }: Props ) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, i) => i);
  return (
    <Box padding={10}>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage || false}
        loader={<h4 key="loader">Loading...</h4>}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
          columnGap={5}
          rowGap={5}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {data?.pages.map((page) =>
            page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            )),
          )}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
