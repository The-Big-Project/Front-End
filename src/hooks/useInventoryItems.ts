/** @format */

import { useQuery } from "@tanstack/react-query";
import { getInventoryItems } from "../api/inventoryApi";
import { useSearchParams } from "react-router-dom";

export default function useInventoryItems() {
  const [searchParams] = useSearchParams();
  const pageSize = Number(searchParams.get("pageSize") || 10);
  const pageNumber = Number(searchParams.get("pageNumber") || 1);
  const { data, error, isPending, refetch } = useQuery({
    queryKey: ["inventory"],
    queryFn: () => getInventoryItems(pageSize, pageNumber),
    networkMode: "online",
  });

  return { data, error, isPending, refetch };
}
