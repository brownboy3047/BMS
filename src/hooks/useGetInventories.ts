import { useQuery } from "@tanstack/react-query";
import { getInventories } from "../service/apiInventory";

export const useGetInventories = () => {
  const { data: inventories, isPending } = useQuery({
    queryKey: ["inventories"],
    queryFn: getInventories,
  });

  return { inventories, isPending };
};
