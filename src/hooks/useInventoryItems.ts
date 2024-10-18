/** @format */

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getInventoryItems } from "../api/inventoryApi";
import { useSearchParams } from "react-router-dom";
import { useSearchContext } from "../pages/Inventory/contexts/SearchContext";

export default function useInventoryItems() {
  const [searchParams] = useSearchParams();
  const pageSize = Number(searchParams.get("pageSize") || 12);
  const pageNumber = Number(searchParams.get("pageNumber") || 0);

  const { searchQuery } = useSearchContext();

  const queryClient = useQueryClient();

  const { data, error, isPending, refetch, isPaused, isError } = useQuery({
    queryKey: ["inventory", pageNumber, pageSize, searchQuery],
    queryFn: () => getInventoryItems(pageSize, pageNumber, searchQuery),
    networkMode: "online",
  });

  const pagesNumber = data ? Math.ceil(+data?.count / pageSize) : 0;
  if (pagesNumber > +pageNumber)
    queryClient.prefetchQuery({
      queryKey: ["inventory", pageNumber + 1, pageSize, searchQuery],
      queryFn: () => getInventoryItems(pageSize, +pageNumber + 1, searchQuery),
    });

  if (pageNumber > 0)
    queryClient.prefetchQuery({
      queryKey: ["inventory", +pageNumber - 1, pageSize, searchQuery],
      queryFn: () => getInventoryItems(pageSize, +pageNumber - 1, searchQuery),
    });

  return { data, error, isPending, refetch, isPaused, isError };
}
