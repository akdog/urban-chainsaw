import { useEffect } from "react";

import { ProductContext } from "./ProductStore";

import { useProductSource } from "@/hooks/useProductSource";

type ChildrenType = {
  children: React.ReactElement;
  currentLocation: string;
};

export const ProductProvider = ({
  children,
  currentLocation,
}: ChildrenType) => {
  const { data, setLocationData, categoryID } = useProductSource();

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

  return (
    <>
      <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
    </>
  );
};
