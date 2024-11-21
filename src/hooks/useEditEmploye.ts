import { useState } from "react";
import axios from "axios";
import { employee } from "../models/employee";

const apiUrl = import.meta.env.VITE_API_URL || "";

const useEditEmploye = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedEmployee, setUpdatedEmployee] = useState<employee | null>(null);

  const updateEmployee = async (employee: employee) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.put(`${apiUrl}/${employee._id}`, {
        name: employee.name,
        email: employee.email,
        age: employee.age,
      });
      setUpdatedEmployee(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    updatedEmployee,
    updateEmployee,
  };
};

export default useEditEmploye;
