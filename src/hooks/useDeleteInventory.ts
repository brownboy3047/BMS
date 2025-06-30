import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInventory } from "../service/apiInventory";
import toast from "react-hot-toast";

export const useDeleteInventory = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteInventoryFn, isPending: isDeleting } = useMutation({
    mutationFn: deleteInventory,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventories"] });
      toast.success("Inventory deleted successfully");
    },

    onError: () => {
      toast.error("Error deleting Inventory");
    },
  });

  return { deleteInventoryFn, isDeleting };
};
