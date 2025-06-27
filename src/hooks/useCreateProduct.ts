import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../service/apiProducts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCreateProduct = () => {
  const navigate = useNavigate();

  const { mutate: addProduct, isPending: isCreating } = useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      toast.success("Product creates successfully");
      navigate("/products");
    },

    onError: () => {
      toast.error("Error creating product");
    },
  });

  return { addProduct, isCreating };
};
