import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SuccessPage from "./pages/SuccessPage";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import ViewAllPage from "./pages/ViewAllPage";

import { ProductProvider } from "@/context/ProductProvider";

const MobileApp = () => {
  const [categoryID, setCategoryID] = useState<number | null>(null);

  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <>
      <ProductProvider
        currentLocation={currentLocation}
        categoryID={categoryID}
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/success-page" element={<SuccessPage />} />
          <Route
            path="/main"
            element={<MainPage setCategoryID={setCategoryID} />}
          />
          <Route
            path="/category"
            element={<CategoryPage setCategoryID={setCategoryID} />}
          />
          <Route path="/all" element={<ViewAllPage />} />
        </Routes>
      </ProductProvider>
    </>
  );
};

export default MobileApp;
