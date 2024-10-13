/** @format */

import {
  usePrefetchQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getInventoryItems } from "../api/inventoryApi";
import { useSearchParams } from "react-router-dom";

export default function useInventoryItems() {
  const [searchParams] = useSearchParams();
  const pageSize = Number(searchParams.get("pageSize") || 12);
  const pageNumber = Number(searchParams.get("pageNumber") || 0);

  const queryClient = useQueryClient();

  const { data, error, isPending, refetch, isPaused, isError } = useQuery({
    queryKey: ["inventory", pageNumber, pageSize],
    queryFn: () => getInventoryItems(pageSize, pageNumber),
    networkMode: "online",
  });

  const pagesNumber = data ? Math.ceil(+data?.count / pageSize) : 0;
  if (pagesNumber > +pageNumber)
    queryClient.prefetchQuery({
      queryKey: ["inventory", pageNumber + 1, pageSize],
      queryFn: () => getInventoryItems(pageSize, +pageNumber + 1),
    });

  if (pageNumber > 0)
    queryClient.prefetchQuery({
      queryKey: ["inventory", +pageNumber - 1, pageSize],
      queryFn: () => getInventoryItems(pageSize, +pageNumber - 1),
    });

  return { data, error, isPending, refetch, isPaused, isError };
}
