import { useQuery } from "@tanstack/react-query";
import initialData from "../data/genres";
import APIClient from "../services/api-client";
import { TIME } from "../constants/time";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: TIME.DAY,
    initialData,
  });

export default useGenres;
