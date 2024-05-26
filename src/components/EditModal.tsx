import { Modal } from "antd";
import React from "react";
import { useCustomeContext } from "../context/RealEstateContext";
import { ISignUp } from "../types/signUp.types";
import { useForm } from "react-hook-form";

interface IEditModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}
function EditModal({ isModalOpen, setIsModalOpen }: IEditModalProps) {
  const { selectedAd, setSelectedAd } = useCustomeContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: ISignUp) => {
    console.log(data);
  };
  return (
    <Modal
      title="ویرایش آگهی"
      open={isModalOpen}
      footer={""}
      onCancel={() => setIsModalOpen(false)}
    >
      <input
        type="text"
        {...register("title")}
        defaultValue={selectedAd?.title}
      />
      <input type="text" {...register("tel")} defaultValue={selectedAd?.tel} />
      <input
        type="text"
        {...register("description")}
        defaultValue={selectedAd?.description}
      />
      <input
        type="text"
        {...register("Features")}
        defaultValue={selectedAd?.Features}
      />
      <input
        type="text"
        {...register("price")}
        defaultValue={selectedAd?.price}
      />
      <button
        className="w-[197px] h-[48px] rounded-[6.422px] text-white bg-[#288E87] mt-[5%] mx-auto"
        onClick={handleSubmit(onSubmit)}
      >
        ویرایش
      </button>
    </Modal>
  );
}

export default EditModal;
