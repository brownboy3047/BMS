import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (context === undefined)
    throw new Error(
      "ProductContext is not use within the ProductContextProvider"
    );

  return context;
};
