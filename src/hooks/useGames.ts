import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { TIME } from "../constants/time";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
const apiClient = new APIClient<Game>("/games");

export interface Game {
  background_image: string;
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: TIME.DAY,
  });

export default useGames;
