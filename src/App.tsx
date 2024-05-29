import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { useCustomeContext } from "./context/RealEstateContext";
import AdRegistration from "./pages/AdRegistration";
import Ad from "./pages/Ad";
import { useEffect } from "react";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const { theme } = useCustomeContext();
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);
  return (
    <main className="dark:bg-slate-900 dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/AdRegistration"
            element={
              <ProtectedRoute>
                <AdRegistration />
              </ProtectedRoute>
            }
          />

          <Route path="/ad/:adId" element={<Ad />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
