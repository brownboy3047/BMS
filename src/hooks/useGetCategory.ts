import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../service/apiCategory";

export const useGetCategory = () => {
  const { data: categories, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });

  return { categories, isPending };
};
