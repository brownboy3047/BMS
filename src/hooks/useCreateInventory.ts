import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createInventory } from "../service/apiInventory";
import toast from "react-hot-toast";

export const useCreateInventory = () => {
  const navigate = useNavigate();

  const { mutate: addInventory, isPending: isCreating } = useMutation({
    mutationFn: createInventory,

    onSuccess: () => {
      toast.success("Inventory creates successfully");
      navigate("/inventory");
    },

    onError: () => {
      toast.error("Error creating inventory");
    },
  });

  return { addInventory, isCreating };
};
