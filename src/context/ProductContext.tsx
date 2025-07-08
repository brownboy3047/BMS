/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

interface SelectedInventory {
  [key: string]: any; // or specific properties if you know the shape of the object
}
interface ContextProps {
  theId: number;
  setTheId: (id: number) => void;
  selectedInventory: SelectedInventory;
  setSelectedInventory: (productEdit: SelectedInventory) => void;
}

const defaultContextProps = {
  theId: 0,
  setTheId: () => {},
  selectedInventory: {},
  setSelectedInventory: () => {},
};

export const ProductContext = createContext<ContextProps>(defaultContextProps);

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theId, setTheId] = useState(0);
  const [selectedInventory, setSelectedInventory] = useState<SelectedInventory>(
    {}
  );

  return (
    <ProductContext.Provider
      value={{ theId, setTheId, selectedInventory, setSelectedInventory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
