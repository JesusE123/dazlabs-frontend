import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import useNewEmploye from "../hooks/useNewEmploye";

type Inputs = {
  _id: string;
  name: string;
  email: string;
  age: number;
};

const NewEmploye = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
    reset();
  };

  const { mutate, isPending } = useNewEmploye();

  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-3">
        Dazlabs Employees 🚀
      </h1>

      <div className="w-[400px] p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center font-semibold mb-3">
            Register New Employee
          </h2>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="string"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              {...register("name", { required: true })}
              autoComplete="off"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Age
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              {...register("age", { required: true })}
            />
          </div>
          {errors.root && <span>This field is required</span>}

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isPending ? "wait..." : "Save"}
          </button>
        </form>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link to="Employes">See Employes</Link>
        </button>
      </div>
    </>
  );
};

export default NewEmploye;
