import React from "react";
// import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
}

interface CategoryTableProps {
  categories: Category[];
  handleEdit: (id: number) => void;
  handleView: (id: number) => void;
  handleDelete: (id: number) => void;
}

const CategoryTable: React.FC<CategoryTableProps> = ({
  categories,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="overflow-x-auto p-4 bg-white shadow-md rounded">
      <h2 className="mb-2 font-bold">
        Total Products Categories: {categories?.length}
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
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categories?.length ? (
            categories?.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {category.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {category.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    // to={`${product.id}`}
                    onClick={() => handleEdit(category.id)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </button>
                  {/* <Link
                    to={`${category.id}`}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    View
                  </Link> */}
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center text-2xl font-bold py-4">
                No Category Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
