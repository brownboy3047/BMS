/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

// * Get all product
export const getProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products`);

    // console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

//* Get single product
export const getProductDetails = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}`);

    // console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

// * Create Product

export const createProduct = async (newProduct: any) => {
  try {
    await axios.post(`${baseUrl}/products`, newProduct);

    // alert("Product added successfully!");
  } catch (error) {
    console.error(error);
    alert("Error adding product!");
  }
};

// * Delete Product
export const deleteProduct = async (id: number) => {
  const response = await axios.delete(`${baseUrl}/products/${id}`);

  return response.data;
};
