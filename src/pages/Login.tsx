import { useState } from "react";
import Navbar from "../components/Navbar";
import Notif from "../components/Notif";
import {  useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(" http://localhost:3000/Login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status !== 200) {
          console.log("first");
        }
        return response.json();
      })
      .then((json) => {
        localStorage.setItem("token", json.accessToken),
          localStorage.setItem("username", json.user.username);
          console.log(json)
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="flex h-[90vh] bg-indigo-700 dark:bg-slate-800">
        <div className="w-full max-w-xs m-auto bg-indigo-100  rounded p-5">
          <form onSubmit={handleLogin}>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="username">
                ایمیل
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                name="username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                رمزعبور
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                className="w-full bg-indigo-700 dark:bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-6 rounded"
                type="submit"
                value={"تایید"}
              />
            </div>
          </form>
          <footer>
            <a
              className="text-indigo-700 hover:text-pink-700 text-sm float-left"
              href="#"
            >
              فراموشی رمزعبور
            </a>
            <a
              className="text-indigo-700 hover:text-pink-700 text-sm float-right"
              href="/SignUp"
            >
              ثبت نام{" "}
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Login;
