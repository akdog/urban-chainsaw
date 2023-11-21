import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SuccessPage from "./pages/SuccessPage";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";

const MobileApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/success-page" element={<SuccessPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </>
  );
};

export default MobileApp;
