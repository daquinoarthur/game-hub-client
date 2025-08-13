import { useQuery } from "@tanstack/react-query";
import { TIME } from "../constants/time";
import initialData from "../data/platforms";
import Platform from "../entities/Platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: TIME.DAY,
    initialData,
  });

export default usePlatforms;
