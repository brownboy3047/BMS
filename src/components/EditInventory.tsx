import React from "react";
import GoBack from "./GoBack";
import { useProductContext } from "../hooks/useProductContext";
import { useForm } from "react-hook-form";
import { useGetCategory } from "../hooks/useGetCategory";
import { useEditInventory } from "../hooks/useEditInventory";

interface InventoryFormData {
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

interface Category {
  id: number;
  name: string;
}

const EditInventory: React.FC = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<InventoryFormData>();

  const { selectedInventory } = useProductContext();
  const { categories } = useGetCategory();
  const { editInventory, isEditing } = useEditInventory();

  //   console.log(selectedInventory);

  const onSubmit = async (data: InventoryFormData) => {
    console.log(data);

    const id = selectedInventory?.id;

    if (selectedInventory) {
      editInventory({ newEditInventory: data, id });
    }
  };

  return (
    <main className="flex-1 p-4 lg:p-8">
      <GoBack />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-full mx-auto p-4 md:p-4 m-4 bg-white rounded-md shadow-md"
      >
        <h2 className="text-lg font-bold mb-4">Edit Inventory</h2>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/ px-2 mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2">
              Product Name:
            </label>
            <input
              defaultValue={selectedInventory?.productName}
              type="text"
              {...register("productName", {
                required: "Product name is required",
              })}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.productName && (
              <p className="text-red-500 text-sm">
                {errors.productName.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mt-4">
            <label className="block text-sm font-medium mb-2">Quantity:</label>
            <input
              defaultValue={selectedInventory?.quantity}
              type="number"
              {...register("quantity", {
                required: "Quantity is required",
                valueAsNumber: true,
              })}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity.message}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mt-4 md:mt-4 md:ml-0">
            <label className="block text-sm font-medium mb-2">
              Unit Price:
            </label>
            <input
              defaultValue={selectedInventory?.unitPrice}
              type="number"
              {...register("unitPrice", {
                required: "Unit price is required",
                valueAsNumber: true,
              })}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.unitPrice && (
              <p className="text-red-500 text-sm">{errors.unitPrice.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-sm font-medium mb-2">Category:</label>
            <select
              defaultValue={selectedInventory?.category}
              {...register("category", { required: "Category is required" })}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              {categories?.length ? (
                categories?.map((category: Category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))
              ) : (
                <option value="">
                  No category to select from. Create category now
                </option>
              )}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-sm font-medium mb-2">Status:</label>
            <select
              defaultValue={selectedInventory?.status}
              {...register("status", { required: "Status is required" })}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a status</option>
              <option value="In stock">In Stock</option>
              <option value="Out of stock">Out of Stock</option>
              <option value="Low stock">Low Stock</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Supplier:</label>
          <input
            defaultValue={selectedInventory?.supplier}
            type="text"
            {...register("supplier", { required: "Supplier is required" })}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.supplier && (
            <p className="text-red-500 text-sm">{errors.supplier.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Location:</label>
          <input
            defaultValue={selectedInventory?.location}
            type="text"
            {...register("location", { required: "Location is required" })}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description:</label>
          <textarea
            defaultValue={selectedInventory?.description}
            {...register("description", {
              required: "Description is required",
            })}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Expiration Date:
          </label>
          <input
            defaultValue={selectedInventory?.expirationDate}
            type="date"
            {...register("expirationDate", {
              required: "Expiration date is required",
            })}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.expirationDate && (
            <p className="text-red-500 text-sm">
              {errors.expirationDate.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isEditing}
          className={`py-2 px-4 rounded-md text-white font-bold ${
            isEditing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700"
          }`}
        >
          {isEditing ? "Updating..." : "Update"}
        </button>
      </form>
    </main>
  );
};

export default EditInventory;
