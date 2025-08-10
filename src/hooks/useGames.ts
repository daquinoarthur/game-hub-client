import { useInfiniteQuery } from "@tanstack/react-query";
import { TIME } from "../constants/time";
import { Game } from "../entities/Game";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
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
};

export default useGames;
