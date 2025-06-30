import { useQuery } from "@tanstack/react-query";
import { getInventoryDetails } from "../service/apiInventory";

export const useGetInventoryDetails = (id: number) => {
  const { data: inventory, isPending } = useQuery({
    queryKey: ["inventory", id],
    queryFn: () => getInventoryDetails(id),
  });

  return { inventory, isPending };
};
