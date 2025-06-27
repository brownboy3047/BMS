import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../service/apiCategory";
import toast from "react-hot-toast";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteCategoryFn, isPending: isDeleting } = useMutation({
    mutationFn: deleteCategory,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category deleted successfully");
    },

    onError: () => {
      toast.error("Error deleting category");
    },
  });

  return { deleteCategoryFn, isDeleting };
};
