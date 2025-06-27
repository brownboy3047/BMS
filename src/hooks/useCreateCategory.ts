import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../service/apiCategory";
import toast from "react-hot-toast";

export const useCreateCategory = () => {
  const navigate = useNavigate();

  const { mutate: createCategoryFn, isPending: isCreating } = useMutation({
    mutationFn: createCategory,

    onSuccess: () => {
      toast.success("Category creates successfully");
      navigate("/category");
    },

    onError: () => {
      toast.error("Error creating category");
    },
  });

  return { createCategoryFn, isCreating };
};
