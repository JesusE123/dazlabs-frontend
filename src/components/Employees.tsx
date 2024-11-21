import { Link } from "react-router-dom";
import useEmployees from "../hooks/useEmployees";
import { useState } from "react";
import EditEmploye from "./EditEmploye";
import { employee } from "../models/employee";
import SearchEmployee from "./SearchEmployee";

const Employees = () => {
  const { result, isLoading, mutate, editMutate } = useEmployees();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<employee | null>(
    null
  );
  const [filterEmploye, setFilterEmploye] = useState<string>("");

  // Filtrar empleados si hay un filtro, de lo contrario mostrar todos
  const filteredEmployees = filterEmploye
    ? result?.filter(
        (employee) =>
          employee.name.toLowerCase().includes(filterEmploye.toLowerCase()) ||
          employee.email.toLowerCase().includes(filterEmploye.toLowerCase()) ||
          employee.age.toString().includes(filterEmploye)
      )
    : result;

  const handleDelete = (id: string) => {
    mutate(id);
  };

  const handleEditClick = (employee: employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  if (isLoading) return <div>....cargando</div>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="font-bold text-center mb-4 text-3xl">
        List of Employees 🧑{" "}
      </h2>

      <div className="w-12">
        <SearchEmployee setFilterEmploye={setFilterEmploye} />
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees?.map((employee, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {employee.name}
              </th>
              <td className="px-6 py-4">{employee.email}</td>
              <td className="px-6 py-4">{employee.age}</td>
              <td className="px-6 py-4 flex space-x-5">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => handleEditClick(employee)}
                >
                  Edit
                </button>
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => handleDelete(employee._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end">
        <button
          type="submit"
          className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link to="/">Register Employee</Link>
        </button>

        {showModal && selectedEmployee && (
          <EditEmploye
            showModal={showModal}
            setShowModal={setShowModal}
            mutate={editMutate}
            employee={selectedEmployee}
          />
        )}
      </div>
    </div>
  );
};

export default Employees;
