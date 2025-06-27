interface Product {
  id: number;
  name: string;
  status: string;
  sellingPrice: number;
}

export const productData: Product[] = [
  { id: 1, name: "Bag of rice", status: "In Stock", sellingPrice: 10000.05 },
  {
    id: 2,
    name: "Cartoon of indomie",
    status: "In Stock",
    sellingPrice: 20000,
  },
  {
    id: 3,
    name: "Kilo od chicken",
    status: "Out of Stock",
    sellingPrice: 30000,
  },
];
