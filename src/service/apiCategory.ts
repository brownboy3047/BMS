/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

// * Get all Category
export const getCategory = async () => {
  try {
    const response = await axios.get(`${baseUrl}/category`);

    // console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

// * Create Category
export const createCategory = async (newProduct: any) => {
  try {
    await axios.post(`${baseUrl}/category`, newProduct);

    // alert("Product added successfully!");
  } catch (error) {
    console.error(error);
    // alert("Error adding product!");
  }
};

// * Delete category
export const deleteCategory = async (id: number) => {
  const response = await axios.delete(`${baseUrl}/category/${id}`);

  return response.data;
};
