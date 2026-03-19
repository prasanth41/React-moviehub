import useData from "./useData";
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
const useGames = () => useData<Game>("/games");

export default useGames;