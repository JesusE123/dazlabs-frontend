import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchUsers, deleteEmploye, updateEmployee } from "../api";
import { useState, useEffect } from "react";
import { employee } from "../models/employee";

const useEmployees = () => {
  const [employees, setEmployees] = useState<employee[]>([]);
  


  const { data, isLoading, refetch } = useQuery({
    queryKey: ["employee"],
    queryFn: fetchUsers,
  });

  const { mutate } = useMutation({
    mutationFn: deleteEmploye,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error("Error deleting employee:", error);
    },
  });

  const { mutate:editMutate } = useMutation({
    mutationFn: updateEmployee,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error("Error deleting employee:", error);
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data)
      setEmployees(data.users);
      
    }
  }, [data]);

  return {
    result: employees,
    isLoading,
    mutate,
    editMutate,
    
  };
};

export default useEmployees;
