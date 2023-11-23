import { createContext } from "react";
import { Product } from "@/types/TPorducts";

export const ProductContext = createContext<Product[] | undefined>(undefined);
