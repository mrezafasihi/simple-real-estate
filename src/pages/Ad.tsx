import React, { useEffect, useState } from "react";
import { useCustomeContext } from "../context/RealEstateContext";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import EditModal from "../components/EditModal";
import Navbar from "../components/Navbar";

const { confirm } = Modal;

function Ad() {
  const { selectedAd, setSelectedAd } = useCustomeContext();
  const { adId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    fetch(`http://localhost:3000/item/${adId}`)
      .then((res) => res.json())
      .then((jes) => setSelectedAd(jes));
  }, []);

  const showDeleteConfirm = () => {
    confirm({
      icon: <WarningOutlined />,
      title: "آیا مطمئن هستید میخواهید آگهی را حذف کنید؟",
      okText: "بله",
      okType: "danger",
      cancelText: "خیر",
      onOk() {
        fetch(`http://localhost:3000/item/${adId}`, {
          method: "DELETE",
        }).then(navigate("/"));
      },
    });
  };
  return (
    <>
      <Navbar />
      <div>
        <h3 className="font-bold text-xl">{selectedAd?.title}</h3>
        <p>
          <span className="font-bold">قیمت:</span>
          {selectedAd?.price}
          <span>تومان</span>
        </p>
        <p>
          <span className="font-bold">شماره تماس: </span> {selectedAd?.tel}
        </p>
        <div>
          <p className="font-bold">توضیحات</p>
          <p>{selectedAd?.description}</p>
        </div>
        <div>
          <p className="font-bold">امکانات</p>
          <p>{selectedAd?.Features}</p>
        </div>

        <button
          onClick={showDeleteConfirm}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          حذف اگهی
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="focus:outline-none text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          ویرایش آگهی
        </button>
        <EditModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          adId={adId}
        />
      </div>
    </>
  );
}

export default Ad;
