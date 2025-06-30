import React from "react";
import { useForm } from "react-hook-form";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { useGetCategory } from "../hooks/useGetCategory";

interface ProductFormData {
  name: string;
  sellingPrice: number;
  category: string;
  description: string;
  // image?: string;
  image?: FileList;
}

interface Category {
  id: number;
  name: string;
}

const ProductForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>();

  const { addProduct, isCreating } = useCreateProduct();
  const { categories } = useGetCategory();

  const onSubmit = async (data: ProductFormData) => {
    // const newProduct = {
    //   id: Math.floor(Math.random() * 1000) + 1,
    //   name: data.name,
    //   category: data.category,
    //   description: data.description,
    //   status: "In Stock",
    //   sellingPrice: data.sellingPrice,
    // };

    // *start
    const imageFile = data.image?.[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile as Blob); // Cast imageFile to Blob
      reader.onload = () => {
        const newProduct = {
          id: Math.floor(Math.random() * 1000) + 1,
          name: data.name,
          category: data.category,
          description: data.description,
          status: "In Stock",
          sellingPrice: data.sellingPrice,
          image: reader.result as string,
        };
        addProduct(newProduct);
      };
    } else {
      const newProduct = {
        id: Math.floor(Math.random() * 1000) + 1,
        name: data.name,
        category: data.category,
        description: data.description,
        status: "In Stock",
        sellingPrice: data.sellingPrice,
      };
      addProduct(newProduct);
    }
    // *end

    // addProduct(newProduct);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-full mx-aut p-4 md:p-4 m-4 bg-white rounded-md shadow-md"
    >
      <h2 className="text-lg font-bold mb-4">Create Product</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name:</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Selling Price:</label>
        <input
          type="number"
          {...register("sellingPrice", {
            required: "Selling price is required",
            valueAsNumber: true,
          })}
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.sellingPrice && (
          <p className="text-red-500 text-sm">{errors.sellingPrice.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category:</label>
        <select
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
              No category to select from. create category now
            </option>
          )}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Description:</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Image (optional):
        </label>
        <input
          type="file"
          {...register("image")}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
      <button
        type="submit"
        disabled={isCreating}
        className={`py-2 px-4 rounded-md text-white font-bold ${
          isCreating
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700"
        }`}
      >
        {isCreating ? "Adding product..." : "Add product"}
      </button>
    </form>
  );
};

export default ProductForm;
