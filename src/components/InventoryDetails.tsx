import { useParams } from "react-router-dom";
import GoBack from "./GoBack";
import { useGetInventoryDetails } from "../hooks/useGetInventoryDetails";

const InventoryDetails = () => {
  const { id } = useParams();
  const { inventory } = useGetInventoryDetails(Number(id));
  console.log(inventory);

  return (
    <main className="flex-1 p-4 lg:p-8">
      <GoBack />
      <p className="text-xl font-bold">Inventory Details</p>

      <div className="bg-white shadow-md rounded p-4  mt-4">
        <p className="capitalize my-3">
          <span className="font-semibold uppercase mr-2 text-sm">
            PRODUCT ID:
          </span>{" "}
          <span className="text-white font-bold border bg-green-500 px-1 rounded">
            {" "}
            {inventory?.id}
          </span>
        </p>

        <p className="capitalize my-3">
          {" "}
          <span className="font-semibold uppercase mr-2 text-sm">
            PRODUCT NAME:
          </span>{" "}
          <span className="text-gray-700 font-bold text-sm sm:text-base">
            {" "}
            {inventory?.productName}
          </span>
        </p>

        <p className="capitalize my-3">
          {" "}
          <span className="font-semibold uppercase mr-2 text-sm">
            Quantity:
          </span>{" "}
          <span className="text-gray-700 font-bold text-sm sm:text-base">
            {" "}
            {inventory?.quantity}
          </span>
        </p>

        <p className="capitalize my-3">
          {" "}
          <span className="font-semibold uppercase mr-2 text-sm">
            Unit Price:
          </span>{" "}
          <span className="text-gray-700 font-bold text-sm sm:text-base">
            {" "}
            {inventory?.unitPrice}
          </span>
        </p>

        <p className="capitalize my-3">
          {" "}
          <span className="font-semibold uppercase mr-2 text-sm">
            Category:
          </span>{" "}
          <span className="text-gray-700 font-bold text-sm sm:text-base">
            {" "}
            {inventory?.category}
          </span>
        </p>

        <p className="capitalize my-3">
          {" "}
          <span className="font-semibold uppercase mr-2 text-sm">
            Status:
          </span>{" "}
          <span
            className={`text-white font-bold text-sm sm:text-base p-1 rounded ${
              inventory?.status === "In stock"
                ? "bg-green-500"
                : inventory?.status === "Low stock"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {" "}
            {inventory?.status}
          </span>
        </p>

        <p className="capitalize my-3">
          {" "}
          <span className="font-semibold uppercase mr-2 text-sm">
            Location:
          </span>{" "}
          <span className="text-gray-700 font-bold text-sm sm:text-base">
            {" "}
            {inventory?.location}
          </span>
        </p>

        <p className="capitalize my-3">
          {" "}
          <span className="font-semibold uppercase mr-2 text-sm">
            Supplier:
          </span>{" "}
          <span className="text-gray-700 font-bold text-sm sm:text-base">
            {" "}
            {inventory?.supplier}
          </span>
        </p>

        <p className="capitalize my-3">
          {" "}
          <span className="font-semibold uppercase mr-2 text-sm">
            Expiration Date:
          </span>{" "}
          <span className="text-gray-700 font-bold text-sm sm:text-base">
            {" "}
            {inventory?.expirationDate}
          </span>
        </p>

        <p className="capitalize my-3">
          {" "}
          <span className="font-semibold uppercase mr-2 text-sm">
            Description:
          </span>{" "}
          <span className="text-gray-700 font-bold text-sm sm:text-base">
            {" "}
            {inventory?.description}
          </span>
        </p>
      </div>
    </main>
  );
};

export default InventoryDetails;
