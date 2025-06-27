import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../service/apiProducts";
import toast from "react-hot-toast";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteProductFn, isPending: isDeleting } = useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfully");
    },

    onError: () => {
      toast.error("Error deleting product");
    },
  });

  return { deleteProductFn, isDeleting };
};
