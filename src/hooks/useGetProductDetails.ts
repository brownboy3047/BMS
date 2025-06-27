import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../service/apiProducts";

export const useGetProductDetails = (id: number) => {
  const { data: product, isPending } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails(id),
  });

  return { product, isPending };
};
