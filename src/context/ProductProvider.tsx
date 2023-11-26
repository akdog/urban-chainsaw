import { useState, useEffect } from "react";

import { ProductContext } from "./ProductStore";

import { Product } from "@/types/TPorducts";

type ChildrenType = {
  children: React.ReactElement;
  currentLocation: string;
};

export const ProductProvider = ({
  children,
  currentLocation,
}: ChildrenType) => {
  const [data, setData] = useState<Product[]>([]);
  const [locationData, setLocationData] = useState<string>("");

  useEffect(() => {
    if (currentLocation === "/main") {
      setLocationData("");
    } else if (currentLocation === "/category") {
      setLocationData("/category/electronics");
    } else if (currentLocation === "/all") {
      setLocationData("");
    }
  }, [currentLocation]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products${locationData}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [locationData]);

  return (
    <>
      <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
    </>
  );
};
