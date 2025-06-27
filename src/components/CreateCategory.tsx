import { useForm } from "react-hook-form";
import GoBack from "./GoBack";
import { useCreateCategory } from "../hooks/useCreateCategory";

interface CategoryFormData {
  name: string;
  // image?: string;
  image?: FileList;
}

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormData>();

  const { createCategoryFn, isCreating } = useCreateCategory();

  const onSubmit = async (data: CategoryFormData) => {
    const newProduct = {
      id: Math.floor(Math.random() * 10000) + 1,
      name: data.name,
    };

    createCategoryFn(newProduct);

    reset();
  };

  return (
    <main className="flex-1 p-4 lg:p-8">
      <GoBack />
      {/* <p>Create Category Page</p> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-full mx-auto p-4 md:p-4 m-4 bg-white rounded-md shadow-md"
      >
        <h2 className="text-lg font-bold mb-4">Create Category</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name:</label>
          <input
            type="text"
            placeholder="Enter the name product category"
            {...register("name", { required: "Name is required" })}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
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
          {isCreating ? "Creating category..." : "Create Category"}
        </button>
      </form>
    </main>
  );
};

export default CreateCategory;
