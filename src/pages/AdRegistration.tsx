import React from "react";
import { useForm } from "react-hook-form";
import { ISignUp } from "../types/signUp.types";

function AdRegistration() {
  const { register, handleSubmit } = useForm<ISignUp>();
  const onSubmit = (data: ISignUp) => {
    console.log(data);
    fetch("http://localhost:3000/item", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <main>
      <h2>ثبت آگهی</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">عنوان</label>
        <input type="text" {...register("title")} />
        <label htmlFor="">شماره تماس</label>
        <input type="text" {...register("tel")} />
        <label htmlFor="">توضیحات</label>
        <input type="text" {...register("description")} />
        <label htmlFor="">امکانات</label>
        <input type="text" {...register("Features")} />
        <label htmlFor="">قیمت</label>
        <input type="text" {...register("price")} />
        <input type="submit" />
      </form>
    </main>
  );
}

export default AdRegistration;
