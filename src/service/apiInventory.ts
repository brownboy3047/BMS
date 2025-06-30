/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

// * Get all inventories
export const getInventories = async () => {
  try {
    const response = await axios.get(`${baseUrl}/inventories`);

    // console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

//* Get single Inventory
export const getInventoryDetails = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/inventories/${id}`);

    // console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

// * Create Inventory

export const createInventory = async (newProduct: any) => {
  try {
    await axios.post(`${baseUrl}/inventories`, newProduct);
  } catch (error) {
    console.error(error);
    // alert("Error adding Inventory!");
  }
};

// * Delete inventory
export const deleteInventory = async (id: number) => {
  const response = await axios.delete(`${baseUrl}/inventories/${id}`);

  return response.data;
};
