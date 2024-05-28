import React from "react";
import { BorderTopOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";

const Notif: React.FC = ({ message, description }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.info({
      message: "hello",
      description: "hello",
      duration: 1,
    });
  };

  return (
    <>
      {contextHolder}

      <Button
        type="primary"
        onClick={openNotification}
        icon={<BorderTopOutlined />}
      >
        top
      </Button>
    </>
  );
};

export default Notif;
