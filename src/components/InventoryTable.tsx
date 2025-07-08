import React, { useState } from "react";
import { useProductContext } from "../hooks/useProductContext";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteInventory } from "../hooks/useDeleteInventory";

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

interface InventoriesProp {
  inventories: Inventory[];
  // handleEdit: (id: number) => void;
  // handleView: (id: number) => void;
}

const InventoryTable: React.FC<InventoriesProp> = ({ inventories }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { theId, setTheId, setSelectedInventory } = useProductContext();
  const { deleteInventoryFn } = useDeleteInventory();

  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    // setTheId(id);
    const inventoryToEdit = inventories?.find((user) => user?.id === id);

    if (inventoryToEdit) {
      setSelectedInventory(inventoryToEdit);
    }

    // console.log(`Editing user with id ${id}`);

    navigate("/editInventory");
  };

  const handleDeleteModal = (id: number) => {
    setTheId(id);
    setOpenDeleteModal(true);
  };

  const handleDelete = () => {
    console.log(`Delete product with id: ${theId}`);
    // Implement your delete logic here
    deleteInventoryFn(theId);
    setOpenDeleteModal(false);
  };

  return (
    <>
      <div className="overflow-x-auto p-4 bg-white shadow-md rounded">
        <h2 className="mb-2 font-bold">
          Total Inventories: {inventories?.length}
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="">
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
              >
                Product ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
              >
                Quantity
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
              >
                Unit Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
              >
                Total Value
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
              >
                Status
              </th>
              {/* <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
              >
                Supplier
              </th> */}
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventories?.length ? (
              inventories?.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.productName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.quantity.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.unitPrice.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {(product.unitPrice * product.quantity).toLocaleString()}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm text-white font-bold`}
                  >
                    <span
                      className={`p-1 rounded ${
                        product.status === "In stock"
                          ? "bg-green-500"
                          : product.status === "Low stock"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {" "}
                      {product.status}
                    </span>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.supplier}
                  </td> */}

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      // to={`${product.id}`}
                      onClick={() => handleEdit(product.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4 outline-none text-xs border p-1 rounded uppercase"
                    >
                      Edit
                    </button>
                    <Link
                      to={`${product.id}`}
                      // onClick={() => handleView(product.id)}
                      className="text-blue-600 hover:text-blue-900 mr-4 outline-none text-xs border p-1 rounded uppercase"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleDeleteModal(product.id)}
                      className="text-red-600 hover:text-red-900 outline-none text-xs border p-1 rounded uppercase"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center text-2xl font-bold py-4">
                  No Product Inventory Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {openDeleteModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-red-700">
              Delete Action!
            </h2>
            <p className="mb-2 font-bold text-sm">
              Are you sure you want to delete product permanently?
            </p>
            <p className="mb-5 text-sm">This action cannot be undone.</p>

            <div className="flex items-center gap-10">
              <button
                className="bg-gradient-to-r from-red-500 to-[#fc800e] hover:from-red-400 hover:to-red-400 text-white text-base font-bold py-1 px-3 rounded"
                onClick={handleDelete}
              >
                Yes
              </button>

              <button
                className="bg-blue-400 hover:bg-blue-500 text-white text-base font-bold py-1 px-3 rounded"
                onClick={() => setOpenDeleteModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InventoryTable;
