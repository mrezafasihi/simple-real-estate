import React, { useEffect, useState } from "react";
import { useCustomeContext } from "../context/RealEstateContext";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import EditModal from "../components/EditModal";

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
    <div>
      {selectedAd?.title}
      <button onClick={showDeleteConfirm}>حذف اگهی</button>
      <button onClick={() => setIsModalOpen(true)}>ویرایش آگهی</button>
      <EditModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Ad;
