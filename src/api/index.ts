import axios from "axios";
import { employee } from "../models/employee";

const apiUrl = "https://dazlabs-test-backend-4.onrender.com/api/users";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw new Error("Failed to fetch users");
  }
};

export const deleteEmploye = async (id: string) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = async (employee: employee) => {
  try {
    const response = await axios.put(`${apiUrl}/${employee._id}`, {
      name: employee.name,
      email: employee.email,
      age: employee.age,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createEmployee = async (employee: employee) => {
  try {
    const res = await axios.post(apiUrl, employee);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
