import { GameQuery } from "@/App";
import SearchInput from "@/components/SearchInput";
import { Platform } from "@/hooks/usePlatforms";
import ApiClient, { FetchResponse } from "@/services/api-client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) => {
        return apiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        })
    },
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next  ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
})


export default useGames;