import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useGetInventories } from "../hooks/useGetInventories";
import InventoryTable from "./InventoryTable";
import Papa from "papaparse";

interface Inventory {
  id: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  description: string;
  category: string;
  status: string;
  supplier: string;
  expirationDate: string;
  location: string;
}

const Inventory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { inventories, isPending } = useGetInventories();
  // console.log(inventories);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  //   * search product inventory name  function
  const searchInventories: Inventory[] = inventories?.filter(
    (Inventory: Inventory) =>
      Inventory?.productName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //   * search product name  function
  // const searchProducts: Product[] = products?.filter((product: Product) =>
  //   product?.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // *Edit function
  const handleEdit = (id: number) => {
    console.log(`Edit product with id: ${id}`);
    // Implement your edit logic here
  };

  const handleView = (id: number) => {
    console.log(`View product with id: ${id}`);
    // Implement your view logic here
  };

  const handleExportToCSV = () => {
    const csv = Papa.unparse(inventories);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const link = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = link;
    a.download = "inventories.csv";
    a.click();
  };

  return (
    <main className="flex-1 p-4 lg:p-8">
      <div className="flex items-center justify-between">
        <h1 className="capitalize font-bold text-2xl">Product Inventory</h1>

        <Link
          to="createInventory"
          className="flex items-center gap-2 py-2 px-3 bg-secondary rounded text-white hover:text-neutral-700 font-semibold"
        >
          <AiOutlinePlusCircle size={18} />
          New
        </Link>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded"
          onClick={handleExportToCSV}
        >
          Export to CSV
        </button>

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
          <InventoryTable
            inventories={searchInventories}
            handleEdit={handleEdit}
            handleView={handleView}
            // handleDelete={handleDelete}
          />
        </div>
      )}
    </main>
  );
};

export default Inventory;
