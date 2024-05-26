import React from "react";
import { Link } from "react-router-dom";
import { useCustomeContext } from "../context/RealEstateContext";
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
function Navbar() {
  const { theme, setTheme } = useCustomeContext();
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <section className=" max-w-screen-xl  mx-auto py-2 ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              className="w-20 cursor-pointer"
              src="/images/Logo.png"
              alt="logo"
            />
          </Link>
          <h1 className="font-bold text-xl">سایت فروش مسکن</h1>
        </div>
        <div className="flex">
          <Link to={"/AdRegistration"}>
            <button className="ml-12 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              ثبت آگهی
            </button>
          </Link>
          <div className="group cursor-pointer h-8  mt-2 ">
            ورود/ عضویت
            <div className="absolute hidden hover:flex  group-hover:flex flex-col  shadow-2xl w-24 py-4  px-6 space-y-6  ">
              <Link className="hover:text-blue-700" to={"/Login"}>
                ورود
              </Link>
              <Link className="hover:text-blue-700" to={"/SignUp"}>
                ثبت نام
              </Link>
            </div>
          </div>

          <Switch
            className="mr-4 mt-[10px]"
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            onChange={handleTheme}
          />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
