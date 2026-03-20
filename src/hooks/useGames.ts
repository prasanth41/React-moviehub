import useData from "./useData";
import { Genre } from "./useGenres";
export interface PlatForm {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: PlatForm}[];
    metaCritic: number;
}
const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;