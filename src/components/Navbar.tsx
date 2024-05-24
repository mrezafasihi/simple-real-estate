import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section>
      <div className="flex">
        <div className="flex items-center">
          <img className="w-20" src="/images/Logo.png" alt="logo" />
          <h1 className="font-bold text-xl">سایت فروش مسکن</h1>
        </div>
        <div>
          <Link to={"AdRegistration"}>ثبت آگهی </Link>
          <p>ورود/ عضویت</p>
          <div className="absolute flex flex-col hidden">
          <Link to={"Login"}>ورود</Link>
          <Link to={"SignUp"}>ثبت نام</Link>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Navbar;
