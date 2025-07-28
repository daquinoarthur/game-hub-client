import { useQuery } from "@tanstack/react-query";
import initialData from "../data/platforms";
import APIClient from "../services/api-client";
import { TIME } from "../constants/time";

const apiClient = new APIClient<Platform>("/platforms");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: TIME.DAY,
    initialData,
  });

export default usePlatforms;
