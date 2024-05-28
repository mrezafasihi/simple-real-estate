import React from "react";
import { useForm } from "react-hook-form";
import { ISignUp } from "../types/signUp.types";
import Navbar from "../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import MapLeaflet from "../components/MapLeaflet";
import { useCustomeContext } from "../context/RealEstateContext";

function AdRegistration() {
  const { token} = useCustomeContext();

  const { register, handleSubmit } = useForm<ISignUp>();
  const navigator = useNavigate();
  const onSubmit = (data: ISignUp) => {
    console.log(data);
    fetch("http://localhost:3000/664/item", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }).then(navigator("/"));
  };
  return (
    <main className="">
      <Navbar />
      <div className="flex flex-col max-w-[900px] justify-center max-h-max shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mx-auto rounded-lg">
        <h2 className="font-bold text-center  text-2xl">ثبت آگهی</h2>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-w-screen-md mx-auto space-y-4 w-full px-10"
        >
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">عنوان</label>
            <input
              type="text"
              {...register("title")}
              className="bg-gray-100 h-8 "
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">شماره تماس</label>
            <input
              type="text"
              {...register("tel")}
              className="bg-gray-100 h-8"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">توضیحات</label>
            <input
              type="text"
              {...register("description")}
              className="bg-gray-100 h-8"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">امکانات</label>
            <input
              type="text"
              {...register("Features")}
              className="bg-gray-100 h-8"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">قیمت</label>
            <input
              type="text"
              {...register("price")}
              className="bg-gray-100 h-8"
            />
          </div>
          <MapLeaflet />

          <input
            type="submit"
            value="تایید"
            className="w-36 h-12  text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          />
        </form>
      </div>
    </main>
  );
}

export default AdRegistration;
