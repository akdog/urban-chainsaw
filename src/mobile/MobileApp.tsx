import { Routes, Route, useLocation } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SuccessPage from "./pages/SuccessPage";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";

import { ProductProvider } from "@/context/ProductProvider";

const MobileApp = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <>
      <ProductProvider currentLocation={currentLocation}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/success-page" element={<SuccessPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </ProductProvider>
    </>
  );
};

export default MobileApp;
