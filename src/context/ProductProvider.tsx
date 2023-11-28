import { useState, useEffect } from "react";

import { ProductContext } from "./ProductStore";

import { Product } from "@/types/TPorducts";

type ChildrenType = {
  children: React.ReactElement;
  currentLocation: string;
  categoryID: number | null;
};

export const ProductProvider = ({
  children,
  currentLocation,
  categoryID,
}: ChildrenType) => {
  const [data, setData] = useState<Product[]>([]);
  const [locationData, setLocationData] = useState<string>("");

  useEffect(() => {
    switch (categoryID) {
      case null:
      case 5:
      case 6:
        setLocationData("");
        break;
      case 1:
        setLocationData("/category/electronics");
        break;
      case 2:
        setLocationData("/category/jewelery");
        break;
      case 3:
        setLocationData("/category/men's clothing");
        break;
      case 4:
        setLocationData("/category/women's clothing");
        break;
      default:
        setLocationData("");
    }
  }, [categoryID, currentLocation]);

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
