import { Modal } from "antd";
import { useCustomeContext } from "../context/RealEstateContext";
import { ISignUp } from "../types/signUp.types";
import { useForm } from "react-hook-form";

interface IEditModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  adId: number;
}
function EditModal({ isModalOpen, setIsModalOpen, adId }: IEditModalProps) {
  const { selectedAd, setSelectedAd } = useCustomeContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: ISignUp) => {
    fetch(`http://localhost:3000/item/${adId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setIsModalOpen(false);
        setSelectedAd(json);
      });
  };
  return (
    <Modal
      title="ویرایش آگهی"
      open={isModalOpen}
      footer={""}
      onCancel={() => setIsModalOpen(false)}
    >
      <div className="flex flex-col space-y-5">
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            عنوان
          </label>
          <input
            type="text"
            {...register("title")}
            defaultValue={selectedAd?.title}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            قیمت
          </label>
          <input
            type="text"
            {...register("price")}
            defaultValue={selectedAd?.price}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            شماره تماس
          </label>
          <input
            type="text"
            {...register("tel")}
            defaultValue={selectedAd?.tel}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            توضیحات
          </label>
          <textarea
            {...register("description")}
            defaultValue={selectedAd?.description}
            className="bg-gray-50 border h-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            امکانات
          </label>
          <textarea
            {...register("Features")}
            defaultValue={selectedAd?.Features}
            className="bg-gray-50 border h-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          className="w-[197px] h-[48px] rounded-[6.422px] text-white bg-[#288E87] mt-[5%] mx-auto"
          onClick={handleSubmit(onSubmit)}
        >
          ویرایش
        </button>
      </div>
    </Modal>
  );
}

export default EditModal;
