import { useMutation } from "@tanstack/react-query";
import { createEmployee } from "../api";

const useNewEmploye = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: createEmployee,
    onError: (error) => {
      console.error("Error deleting employee:", error);
    },
  });

  return { isPending, mutate };
};

export default useNewEmploye;
