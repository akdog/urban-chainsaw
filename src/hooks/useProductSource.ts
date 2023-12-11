import { useEffect, useReducer, useState } from "react";

import { Product } from "@/types/TPorducts";

export enum ACTIONS {
  SET_DATA,
  SET_CATEGORY,
  SET_LOCATION,
}

type ReducerAction = {
  type: ACTIONS;
  payload?: any;
};

const initalState: {
  data: Product[];
  locationData: string;
  categoryID: number | null;
} = {
  data: [],
  locationData: "",
  categoryID: null,
};

export function useProductSource() {
  const [isBasket, setIsBasket] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initalState);

  function reducer(
    state: typeof initalState,
    action: ReducerAction
  ): typeof initalState {
    switch (action.type) {
      case ACTIONS.SET_DATA:
        return { ...state, data: [...action.payload] };
      case ACTIONS.SET_CATEGORY:
        return { ...state, categoryID: action.payload };
      case ACTIONS.SET_LOCATION:
        return { ...state, locationData: action.payload };
      default:
        return state;
    }
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products${state.locationData}`)
      .then((res) => res.json())
      .then((json) => dispatch({ type: ACTIONS.SET_DATA, payload: json }));
  }, [state.locationData]);

  return {
    dispatch,
    data: state.data,
    locationData: state.locationData,
    setLocationData: (location: string) =>
      dispatch({ type: ACTIONS.SET_LOCATION, payload: location }),
    categoryID: state.categoryID,
    setCategoryID: (category: number) =>
      dispatch({ type: ACTIONS.SET_CATEGORY, payload: category }),
  };
}
