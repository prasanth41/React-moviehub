import { GameQuery } from "@/App";
import SearchInput from "@/components/SearchInput";
import { Platform } from "@/hooks/usePlatforms";
import ApiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
        return apiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        })
    }
})


export default useGames;