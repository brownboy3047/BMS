import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useGetCategory } from "../hooks/useGetCategory";
import CategoryTable from "./CategoryTable";
import { useDeleteCategory } from "../hooks/useDeleteCategory";

interface Category {
  id: number;
  name: string;
}

const Category: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { categories, isPending } = useGetCategory();
  const { deleteCategoryFn } = useDeleteCategory();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  //   * search product name  function
  const searchProducts: Category[] = categories?.filter((category: Category) =>
    category?.name.toLowerCase().includes(searchQuery.toLowerCase())
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

  const handleDelete = (id: number) => {
    console.log(`Delete product with id: ${id}`);
    // Implement your delete logic here
    // deleteProductFn(id);
    deleteCategoryFn(id);
  };

  return (
    <main className="flex-1 p-4 lg:p-8">
      <div className="flex items-center justify-between">
        <h1 className="capitalize font-bold text-2xl">Product Category</h1>

        <Link
          to="createCategory"
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
          <CategoryTable
            categories={searchProducts}
            handleEdit={handleEdit}
            handleView={handleView}
            handleDelete={handleDelete}
          />
        </div>
      )}
    </main>
  );
};

export default Category;
