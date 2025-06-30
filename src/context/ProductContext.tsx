import { createContext, useState } from "react";

interface ContextProps {
  theId: number;
  setTheId: (id: number) => void;
}

const defaultContextProps = {
  theId: 0,
  setTheId: () => {},
};

export const ProductContext = createContext<ContextProps>(defaultContextProps);

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theId, setTheId] = useState(0);

  return (
    <ProductContext.Provider value={{ theId, setTheId }}>
      {children}
    </ProductContext.Provider>
  );
};
