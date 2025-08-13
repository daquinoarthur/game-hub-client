import { useQuery } from "@tanstack/react-query";
import initialData from "../data/genres";
import APIClient from "../services/api-client";
import { TIME } from "../constants/time";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: TIME.DAY,
    initialData,
  });

export default useGenres;
