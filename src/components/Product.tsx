import { useState } from "react";
import { Link } from "react-router-dom";
// import { productData } from "../data/ProductData";
import { useGetProducts } from "../hooks/useGetProducts";
// import { useDeleteProduct } from "../hooks/useDeleteProduct";
import ProductTable from "./ProductTable";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface Product {
  id: number;
  name: string;
  status: string;
  sellingPrice: number;
}

const Product = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { products, isPending } = useGetProducts();
  // const { deleteProductFn } = useDeleteProduct();

  //   console.log(products?.products);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  //   * search product name  function
  const searchProducts: Product[] = products?.filter((product: Product) =>
    product?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // *Edit function
  const handleEdit = (id: number) => {
    console.log(`Edit product with id: ${id}`);
    // Implement your edit logic here
  };

  const handleView = (id: number) => {
    console.log(`View product with id: ${id}`);
    // Implement your view logic here
  };

  // const handleDelete = () => {
  //   console.log(`Delete product with id: ${theId}`);
  //   deleteProductFn(theId);
  // };

  return (
    <main className="flex-1 p-4 lg:p-8">
      <div className="flex items-center justify-between">
        <h1 className="capitalize font-bold text-2xl">Product</h1>

        <Link
          to="createProduct"
          className="flex items-center gap-2 py-2 px-3 bg-secondary rounded text-white hover:text-neutral-700 font-semibold"
        >
          <AiOutlinePlusCircle size={18} />
          New
        </Link>
      </div>

      <div className="mt-4 flex items-end justify-end">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-400 rounded-md focus:outline-non focus:ring-1 focus:ring-secondary outline-none"
        />
      </div>

      {isPending ? (
        <div className="text-3xl font-bold text-center mt-5">Loading...</div>
      ) : (
        <div className="container mx-auto mt-5">
          <ProductTable
            products={searchProducts}
            handleEdit={handleEdit}
            handleView={handleView}
            // handleDelete={handleDelete}
          />
        </div>
      )}
    </main>
  );
};

export default Product;
