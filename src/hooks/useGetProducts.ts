import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../service/apiProducts";

export const useGetProducts = () => {
  const { data: products, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products, isPending };
};
