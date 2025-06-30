import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductDetails } from "../hooks/useGetProductDetails";
import GoBack from "./GoBack";

// import photo from "../assets/rice.jpeg";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { product, isPending } = useGetProductDetails(Number(id));

  console.log(product);

  if (isPending) {
    return (
      <div className="text-2xl p-4 lg:p-8 mx-auto font-bold">Loading...</div>
    );
  }

  return (
    <main className="flex-1 p-4 lg:p-8">
      <GoBack />
      <p className="text-xl font-bold">Product Details</p>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 bg-white shadow-md rounded p-4  mt-4">
        <div className="border p-3">
          <img
            src={product?.image}
            alt="product image"
            className="w-full md:w-40 rounded"
          />
        </div>

        <div>
          <p className="capitalize my-3">
            <span className="font-semibold uppercase mr-2 text-sm">
              PRODUCT ID:
            </span>{" "}
            <span className="text-white font-bold border bg-green-500 px-1 rounded">
              {" "}
              {product?.id}
            </span>
          </p>

          <p className="capitalize my-3">
            <span className="font-semibold uppercase mr-2 text-sm">
              PRODUCT NAME:
            </span>{" "}
            <span className="text-gray-700 font-bold text-sm sm:text-base">
              {" "}
              {product?.name}
            </span>
          </p>

          <p className="capitalize my-3">
            <span className="font-semibold uppercase mr-2 text-sm">
              SELLING PRICE:
            </span>{" "}
            <span className="text-gray-700 font-bold text-sm sm:text-base">
              {product?.sellingPrice.toLocaleString()}
            </span>
          </p>

          <p className="capitalize my-3">
            <span className="font-semibold uppercase mr-2 text-sm">
              description:
            </span>{" "}
            <span className="text-gray-700 font-bold text-sm sm:text-base">
              {" "}
              {product?.description}
            </span>
          </p>

          <p className="capitalize my-3">
            <span className="font-semibold uppercase mr-2 text-sm">
              category:
            </span>{" "}
            <span className="text-gray-700 font-bold text-sm sm:text-base">
              {product?.category}
            </span>
          </p>

          <p className="capitalize my-3">
            <span className="font-semibold uppercase mr-2 text-sm">
              status:
            </span>{" "}
            <span className="text-gray-700 font-bold text-sm sm:text-base">
              {product?.status}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
