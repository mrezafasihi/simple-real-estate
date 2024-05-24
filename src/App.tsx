import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { EstateContextProvider } from "./context/RealEstateContext";
import AdRegistration from "./pages/AdRegistration";
import Ad from "./pages/Ad";

function App() {
  return (
    <main>
      <EstateContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/AdRegistration" element={<AdRegistration />} />
            <Route path="/ad/:adId" element={<Ad />} />
          </Routes>
        </BrowserRouter>
      </EstateContextProvider>
    </main>
  );
}

export default App;
