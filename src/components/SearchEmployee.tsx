import { useForm } from "react-hook-form";

interface SearchEmployeeProps {
  setFilterEmploye: (filter: string) => void;
}

const SearchEmployee = ({ setFilterEmploye }: SearchEmployeeProps) => {
  const { register } = useForm<{ search: string }>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterEmploye(e.target.value);
  };

  return (
    <form className="max-w-md mx-auto">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative mb-3">
        <input
          type="search"
          className="p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Example: Franco Romero..."
          required
          {...register("search")}
          onChange={handleSearchChange}
        />
      </div>
    </form>
  );
};

export default SearchEmployee;
