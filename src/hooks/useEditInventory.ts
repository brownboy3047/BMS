/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editInventoryApi } from "../service/apiInventory";
import toast from "react-hot-toast";

export const useEditInventory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: editInventory, isPending: isEditing } = useMutation({
    mutationFn: ({
      newEditInventory,
      id,
    }: {
      newEditInventory: any;
      id: any;
    }) => editInventoryApi(newEditInventory, id),

    onSuccess: () => {
      toast.success("Inventory successfully edited");

      navigate("/inventory");

      queryClient.invalidateQueries({
        queryKey: ["inventory"],
      });
    },
  });

  return { editInventory, isEditing };
};
