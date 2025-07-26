import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  background_image: string;
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
