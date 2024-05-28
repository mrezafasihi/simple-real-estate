import React from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";

function SignUp() {

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.rePassword == data.password) {
      fetch(" http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          console.log(response);
          if (response.status !== 201) {
            console.log("first");
          }
          return response.json();
        })
        .then((json) => console.log(json))
        .catch((err) => console.log("err"));
    }
  };

  return (
    <>
      

      <Navbar />
      {errors ? () => openNotification("top") : ""}
      <div className="flex h-[90vh] bg-indigo-700 dark:bg-blue-950">
        <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="username">
                نام کاربری
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                {...register("username", { required: true })}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="email">
                ایمیل
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                رمزعبور
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-indigo-500"
                htmlFor="new-password"
              >
                تکرار رمزعبور
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="password"
                {...register("rePassword", { required: true })}
              />
            </div>
            <div>
              <input
                className="w-full bg-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-6 rounded"
                type="submit"
                value={"تایید"}
              />
            </div>
          </form>
          <footer>
            <p className="mx-1">
              اکانت دارم!
              <a
                className="text-indigo-700 hover:text-pink-700 text-sm  "
                href="/login"
              >
                ورود
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default SignUp;
